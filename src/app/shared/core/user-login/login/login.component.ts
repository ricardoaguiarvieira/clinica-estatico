/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StringUtilService } from 'src/app/shared/core/utils/string-util.service';
import { UserLogin } from 'src/app/shared/model/user/UserLogin';
import { Usuario } from 'src/app/shared/model/usuario';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { PortalService } from 'src/app/shared/service/portal.service';

@Component({
  selector: 'app-login-portal-adm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  userLogin = {} as UserLogin;
  mask!: string;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private portalService: PortalService,
    private readonly stringUtil: StringUtilService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      manterConectado: [false]
    });
  }

  access(): void {
    if (this.form.valid) {
      this.userLogin = { ... this.form.value };
      this.removeMask();
      this.portalService.loginPortalAdm.login(this.userLogin).subscribe({
        next: () => {
          
          const usuario: Usuario = this.portalService.loginPortalAdm.getUsuarioLogado();
         
          if(usuario.usernameDomain){
            const manterConectado = this.form.controls['manterConectado'].value as boolean;
            if(manterConectado)
              this.portalService.loginPortalAdm.manterConectado(manterConectado);
            this.router.navigateByUrl('');
          }else{
            this.router.navigateByUrl('externo');
          }

        },
        error: (error) => {
          // this.form.controls.username.patchValue('');
          this.form.controls.password.patchValue('');
          console.error(error);
        }
      });
    }
  }

  /** INICIO: METODOS AUXILIARES */

  removeMask(): void {
    this.userLogin.username = this.userLogin.username?.replace(/\.|-|\//g, '');
  }

  errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  handleEventBlurCpfCnpj() {
    this.userLogin = { ... this.form.value };
    const isNumber = this.isNum(this.userLogin.username);
    this.mask = '';
    if (this.userLogin.username && isNumber) {
      const num = this.userLogin.username.replace('.','').replace('.','').replace('-','').replace('/','');
      if (num.length > 11) {
        this.mask = this.stringUtil.cnpjMask;
      } else {
        this.mask = this.stringUtil.cpfMask;
      }
    }
  }

  isNum(value: any): boolean{
    return !isNaN(value);
  }

  /** FIM: METODOS AUXILIARES */
}

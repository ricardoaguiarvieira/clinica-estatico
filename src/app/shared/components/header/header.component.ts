import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/shared/service/portal.service';

@Component({
  selector: 'app-header-portal-adm',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private portalService: PortalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.iniciarGroup();
  }

  iniciarGroup() :void {
    this.form = this.formBuilder.group({
      pesquisar: ['']
    });
  }

  logout(): void {
    this.portalService.loginPortalAdm.logout();
    this.router.navigateByUrl('/login');
  }
  home(): void {
    this.router.navigateByUrl('');
  }

}

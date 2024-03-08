import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-portal-adm',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  panelOpenState = false;
  possuiPermissaoManterMensageria!: boolean;

  constructor(
    private readonly router: Router,
  ) {  }

  navigate(router: string, isAcesso: boolean): void{
    if(isAcesso){
      this.router.navigate([router]);
    }
  }

}

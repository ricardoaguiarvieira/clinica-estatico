/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertsEnum } from 'src/app/layout-servicos/alerts/alerts.enum';
import { AlertsService } from 'src/app/layout-servicos/alerts/alerts.service';
import { Roles } from '../../model/rules';

import { AuthService } from '../../service/auth.service';
import { PortalService } from '../../service/portal.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardExterno implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly alertsService: AlertsService,
    private PortalService: PortalService
  ) { }

  canActivate(next: ActivatedRouteSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    const usuario = this.authService.getUsuarioLogado();

    if (!this.authService.isLoggedIn) {
      this.alertsService.abrirAlerta(AlertsEnum.error, 'Área de acesso somente para usuários logados!');
      this.PortalService.loginPortalAdm.logout();
      this.router.navigate(['/login']);
    } 

    if (usuario.usernameDomain) {
      this.alertsService.abrirAlerta(AlertsEnum.error, 'Área de acesso somente para usuários com acesso externo!');
      this.PortalService.loginPortalAdm.logout();
      this.router.navigate(['/login']);
    } 

    return true;
  }

}


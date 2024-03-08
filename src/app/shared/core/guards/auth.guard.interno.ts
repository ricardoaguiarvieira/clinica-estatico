/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { AlertsService } from 'src/app/layout-servicos/alerts/alerts.service';
import jwt_decode from 'jwt-decode';

import { AuthService } from '../../service/auth.service';
import { PortalService } from '../../service/portal.service';
import { User } from '../../model/user/User';
import { Usuario } from '../../model/usuario';
import { LocalStorageService } from '../../service/local-storage.service';
import { UsuarioDecoded } from '../../model/user/UsuarioDecoded';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';

const VALIDADE_REFRESH_TOKEN = (60*60)*4; // 4 horas
@Injectable({
  providedIn: 'root',
})
export class AuthGuardInterno implements CanActivate {
  tokenRefreshedSource = new Subject<boolean>();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
  refreshTokenEmAdamento = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private portalService: PortalService,
    private localStorageService: LocalStorageService,
    private readonly alertsService: AlertsService,
  ) { }

  canActivate(next: ActivatedRouteSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    // const usuario = this.authService.getUsuarioLogado();
    // const refreshToken:string = this.localStorageService.get('refreshTokenPortalAdm') as string;

    // if (usuario.usernameDomain) {
    //   if(this.authService.isLoggedIn){
    //     return true;  
    //   } else {
    //     this.verificaSessaoUsuario(usuario);
    //     return true;
    //   }
    // } else {
    //   this.verificaSessaoUsuarioExterno(usuario);
    //   return true;
    // }

    return true;

  }

  // private retornaRefreshToken():Observable<boolean> {
  //   return this.refreshToken().pipe(
  //     switchMap((res:boolean) => {
  //       return of(res);
  //     })
  //   )
  // }

  private verificaSessaoUsuario(usuario:Usuario) {
    // if (!this.authService.isLoggedIn) {
    //   // this.alertsService.abrirAlerta(AlertsEnum.error, 'Área de acesso somente para usuários logados!');
    //   this.portalService.loginPortalAdm.logout();
    //   this.router.navigate(['/login']);
    // } 
    // if (!usuario.usernameDomain) {
    //   // this.alertsService.abrirAlerta(AlertsEnum.error, 'Área de acesso somente para usuários com lotação no DETRAN-DF!');
    //   this.portalService.loginPortalAdm.logout();
    //   this.router.navigate(['/login']);
    // } 
  }

  private verificaSessaoUsuarioExterno(usuario:Usuario) {
    // if (!this.authService.isLoggedIn) {
    //   // this.alertsService.abrirAlerta(AlertsEnum.error, 'Área de acesso somente para usuários logados!');
    //   this.portalService.loginPortalAdm.logout();
    //   this.router.navigate(['/login']);
    // } 
    // if (this.authService.isLoggedIn && !usuario.usernameDomain) {
    //   this.router.navigate(['/externo']);
    // } 
  }

  // private validaRefreshToken():boolean {
  //   const refreshToken = this.localStorageService.get('refreshTokenPortalAdm') as string;
  //   if(refreshToken === null || typeof refreshToken === 'undefined')
  //     return false;

  //   const refreshTokenDecoded: UsuarioDecoded = jwt_decode(refreshToken);
  //   const manterLogado = this.localStorageService.get('manterConectado') as boolean;
  //   const isManterLogado = manterLogado !== null ? manterLogado:false;
  //   const tokenValidoSemManterLogado = (((new Date().getTime() - refreshTokenDecoded.iat*1000)));
  //   const naoManterLogadoValidacaoTempoTokenEmitido = (!isManterLogado && tokenValidoSemManterLogado < (VALIDADE_REFRESH_TOKEN*1000));
  //   const manterLogadoValidacaoTempoRefreshTokenExpiracao = (isManterLogado && (new Date().getTime() < (refreshTokenDecoded.exp*1000)));
    
  //   if(refreshToken !== null && (naoManterLogadoValidacaoTempoTokenEmitido || manterLogadoValidacaoTempoRefreshTokenExpiracao))
  //     return true;
  //   return false;
  // }

  // private refreshToken(): Observable<boolean> {    
  //   if(this.refreshTokenEmAdamento) {
  //     return new Observable(obs => {
  //       this.tokenRefreshed$.subscribe(() => {
  //         obs.next();
  //         obs.complete();  
  //       });
  //     });
  //   } else {
  //     this.refreshTokenEmAdamento = true;
  //     return this.portalService.loginPortalAdm.refreshToken().pipe(
  //       map((response: User) => {
  //         if(response){
  //           this.portalService.loginPortalAdm.setCurrentUser(response);
  //           this.tokenRefreshedSource.next(true);
  //           return true;
  //         } else {
  //           this.tokenRefreshedSource.next(false);
  //           return false;
  //         }
  //       }), catchError(() => {          
  //         this.refreshTokenEmAdamento = false;
  //         this.portalService.loginPortalAdm.logout();
  //         this.router.navigate(['/login']);
  //         return of(false);
  //       }), finalize(() => {
  //         this.refreshTokenEmAdamento = false;
  //       })
  //     );
  //   }
  // }
}


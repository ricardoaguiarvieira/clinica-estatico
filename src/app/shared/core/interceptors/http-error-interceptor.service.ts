/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/*eslint-disable @typescript-eslint/no-non-null-assertion*/
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, of, throwError } from 'rxjs';
import { catchError, concatMap, filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { AlertsEnum } from 'src/app/layout-servicos/alerts/alerts.enum';
import { AlertsService } from 'src/app/layout-servicos/alerts/alerts.service';
import { PortalService } from '../../service/portal.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { User } from '../../model/user/User';
import jwt_decode from 'jwt-decode';
import { UsuarioDecoded } from '../../model/user/UsuarioDecoded';

const VALIDADE_REFRESH_TOKEN = (60*60)*4; // - 4 horas
const LINK_REFRESH_TOKEN='usuario/refresh-token';
@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
  refreshTokenEmAdamento = false;

  private listaUrlPatternsToByPass: Array<string> = [
    '/login',
    '/enviar-email',
    '/habilitacao/altera-endereco',
    '/habilitacao/retorna-endereco-por-cep',
    '/veiculo/changeEndereco',
    '/habilitacao/alterarEndereco',
    '/veiculo/changeEndereco'
  ];
  

  constructor(
    private readonly router: Router,
    private readonly alertsService: AlertsService,
    private readonly portalService: PortalService,
    private readonly localStorageService: LocalStorageService
  ) {}



  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let msgEnviada = false;


    return next.handle(req).pipe(
      tap((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          msgEnviada = this.tratarStatusLogout(evt);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.error.status === 401 && this.validaRefreshToken()) {
          return this.responseCaseUnauthorized(req, next, error);
        } else {
          msgEnviada = this.tratarStatusLogout(error);
          if (!msgEnviada && (error && error.message) && !this.isUrlToByPass(error)) {
            if (error.status === 400) {
              let objMessage = error.error;
              if(typeof error.error == 'string') {
                objMessage = JSON.parse(error.error);
              } else if(req.url.indexOf(LINK_REFRESH_TOKEN) > 0) {
                objMessage = JSON.parse(error.error.authenticationError);
                
              }
              this.alertsService.abrirAlerta(AlertsEnum.error, objMessage.message);
            } else {
              this.alertsService.abrirAlerta(AlertsEnum.alert, error.message);
              
            }
            /** a ser verificado posteriormente. */
            return throwError(error);
          }
          return next.handle(req);
        }
      })
    )
  }

  private responseCaseUnauthorized(req: HttpRequest<any>, next: HttpHandler, error: HttpErrorResponse): Observable<HttpEvent<any>> {
    return this.refreshToken(error).pipe(
      switchMap(() => {
        return next.handle(req);
      })
    )
  }

  private refreshToken(error: HttpErrorResponse): Observable<unknown> {
    
     
      return this.portalService.loginPortalAdm.refreshToken().pipe(
        tap((response: User) => {
          if(response){
            this.portalService.loginPortalAdm.setCurrentUser(response);
            this.tokenRefreshedSource.next();
          }
        }), catchError(() => {
          this.refreshTokenEmAdamento = false;
          this.portalService.loginPortalAdm.logout();
          this.router.navigate(['/login']);
          return throwError(error);
        }) , finalize(() => {
          this.refreshTokenEmAdamento = false;
        })
      );
    
  }
  
  /**
   * 
   * @param evt Status 500 -> Acesso negado
   */
  tratarStatusLogout(evt:any): boolean {
    let retorno = false;
    if (evt) {
     if(evt.status === 404 || evt.status === 200){
        retorno = true;
      } else if (evt.error) {
        const msg: string = evt.error.message;
        if (msg && msg.indexOf('Acesso negado') !== -1) {
          this.executarLogoutPortalAdm();
          this.alertsService.abrirAlerta(AlertsEnum.error, msg);
          retorno = true;
        }
      
      } 
    }
    return retorno;
  }

  private validaRefreshToken():boolean {
    const refreshToken = this.localStorageService.get('refreshTokenPortalAdm') as string;
    if(refreshToken === null || typeof refreshToken === 'undefined')
      return false;

    const refreshTokenDecoded: UsuarioDecoded = jwt_decode(refreshToken);
    const manterLogado = this.localStorageService.get('manterConectado') as boolean;
    const isManterLogado = manterLogado !== null ? manterLogado:false;
    const tokenValidoSemManterLogado = (((new Date().getTime() - refreshTokenDecoded.iat*1000)));
    const naoManterLogadoValidacaoTempoTokenEmitido = (!isManterLogado && tokenValidoSemManterLogado < (VALIDADE_REFRESH_TOKEN*1000));
    const manterLogadoValidacaoTempoRefreshTokenExpiracao = (isManterLogado && (new Date().getTime() < (refreshTokenDecoded.exp*1000)));
    
    if(refreshToken !== null && (naoManterLogadoValidacaoTempoTokenEmitido || manterLogadoValidacaoTempoRefreshTokenExpiracao)){
      return true;
    } else {
      this.executarLogoutPortalAdm();
      return false;
    } 
  }
  executarLogoutPortalAdm(): void {
    // this.router.navigate(['/login'], {});
    this.router.navigate(['/'], {});
    // this.alertsService.abrirAlerta(AlertsEnum.error, 'Acesso inválido ou expirado, por favor refaça o login e tente novamente.');
    this.portalService.loginPortalAdm.logout();
  }

  /**
   * Verifica se é uma URL para ser "bypassada".
   * Para que o tratamento da execessão ocorra em outro 
   * interceptor ou no prórpio componente/service
   * 
   * @param error 
   */
  isUrlToByPass(error: HttpErrorResponse): boolean {
    const urlToByPass = this.listaUrlPatternsToByPass.find(url => error.url!.indexOf(url) > -1);
    return urlToByPass != undefined;
  }
}

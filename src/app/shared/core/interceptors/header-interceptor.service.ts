/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertsService } from 'src/app/layout-servicos/alerts/alerts.service';
import { PortalService } from 'src/app/shared/service/portal.service';

const REFRESH_TOKEN = '/usuario/refresh-token';

@Injectable({
  providedIn: 'root',
})
export class HeaderInterceptorService implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private readonly alertsService: AlertsService,
    private readonly portalService: PortalService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.portalService.loginPortalAdm.getAuthorizationToken();
    this.portalService.loginPortalAdm.usuarioLogado.next(this.portalService.loginPortalAdm.getUsuarioLogado());
    if (token && (request.url.indexOf(REFRESH_TOKEN) < 0)) {

      /**VERIFICA SE O TOKEN FOI EXPIRADO */
      // if (JSON.parse(atob(token.split('.')[1])).exp < Date.now() / 1000) {
      //   this.alertsService.abrirAlerta(
      //     AlertsEnum.error,
      //     'Acesso inválido ou expirado, por favor refaça o login e tente novamente.'
      //   );
      //   this.router.navigate(['home'], {});
      //   this.portalService.loginPortalAdm.logout();
      //   return EMPTY;
      // }
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    // Utilizado no Upload de arquivos. Remover o content-type para o browser inserir automaticamente junto com o boundary.
    if (request.headers.get('Content-Type')?.includes('multipart/form-data')) {
      request = request.clone({
        headers: request.headers.delete('Content-Type')
      });
    }

    if (!request.headers.has('Accept')) {
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json, image/*'),
      });
    }
    
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // caso precise implementar algo no retorno.
        }
        return event;
      })
    );
  }
}


import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/layout-servicos/loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private totalRequisicoes = 0;

  constructor(private loaderService: LoaderService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.totalRequisicoes++;
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      tap((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          // tratar casos de erro na chamada http
        }
      }),
      finalize(() => {
        this.totalRequisicoes--;
        if (this.totalRequisicoes === 0) {
          this.loaderService.isLoading.next(false);
        }
      })
    );
  }
}

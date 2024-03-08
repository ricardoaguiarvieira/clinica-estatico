import { Injectable } from '@angular/core';
import { Alerta } from 'src/app/shared/model/alerta';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() { }
  alerta = new Alerta();

  abrirAlerta(type: string, message: string): void {
    this.alerta.message = message;
    this.alerta.type = type;
    this.alerta.show = true;
    
    of('delay').pipe(
      delay(10000)
    ).subscribe(() => this.hiddenAlerta());

  }

  hiddenAlerta(): void {
    //this.alerta.message = message;
    //this.alerta.type = type;
    this.alerta.show = false;
  }

  abrirErroParaHttpErrorResponse(e: HttpErrorResponse, msgPrefixada?: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    let message = e.error.message as string;
    if (msgPrefixada) {
      message = `${msgPrefixada} ${message}`;
    }
    this.abrirAlerta('', message);
  }
}

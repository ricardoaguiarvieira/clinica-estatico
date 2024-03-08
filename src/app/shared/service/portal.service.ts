import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPortalAdmClient } from './clients/login-portal-adm.client';
import { LocalStorageService } from './local-storage.service';
import { AgendaClient } from './clients/agenda.client';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  readonly loginPortalAdm = new LoginPortalAdmClient(this.http, new LocalStorageService());
  readonly agendaClient = new AgendaClient(this.http);
  constructor(private readonly http: HttpClient) {}
}

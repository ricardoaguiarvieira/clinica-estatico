/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { LocalStorageService } from './local-storage.service';
import { PortalService } from './portal.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private readonly portalService: PortalService
  ) {
  }

  get isLoggedIn(): boolean {
    const authorizationTokenPortalAdm: string = this.portalService.loginPortalAdm.getAuthorizationToken();
    return  authorizationTokenPortalAdm !== '' && authorizationTokenPortalAdm !== null ? true : false;
  }
  
  getUsuarioLogado(): Usuario {
    return this.portalService.loginPortalAdm.getUsuarioLogado();
  }

  logOut(): void {
    this.portalService.loginPortalAdm.logout();
  }

}

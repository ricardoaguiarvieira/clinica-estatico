/* eslint-disable @typescript-eslint/no-unsafe-assignment */


import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import jwt_decode from 'jwt-decode';
import { UsuarioDecoded } from '../model/user/UsuarioDecoded';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  private storage: Storage;  

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage && this.storage.getItem(key)) {
      const valor = this.storage.getItem(key);
      if (valor) {
        return JSON.parse(valor);
      }
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }

  /**
   * Adiciona um item sem transformar para JSON
   * 
   * @param key
   * @param item 
   */
  // addItem(key: LocalStorageKeysEnum, item: any) {
  //   this.storage.setItem(key, item)
  // }

  getEmail(): any {
    return this.get('email');
  }

  gravarUsuarioLogado(token: string): void {
    const tokenDecoded: UsuarioDecoded = jwt_decode(token);
    this.set('email', tokenDecoded.email || '');
    this.set('cpf', tokenDecoded.preferred_username);
    this.set('nome', tokenDecoded.name);
    this.set('roles', tokenDecoded.realm_access.roles);
    if(tokenDecoded.username){
      this.set('userDomain', tokenDecoded.username);
    }else{
      this.set('userDomain', null);
    }
  }

  retornarUsuarioLogado(): Usuario {
    const usuario: Usuario = new Usuario();

    if (this.get('authorizationTokenPortalAdm')) {
      const accessToken = this.get('authorizationTokenPortalAdm');
      const tokenDecoded: UsuarioDecoded = jwt_decode(accessToken);
      if(new Date(tokenDecoded.exp * 1000) < new Date()){
        console.log('token expirado!');
        usuario.isTokenValido = false;
        return usuario;
      }
      usuario.token = accessToken;
      usuario.cpf = this.get('cpf');
      usuario.email = this.get('email');
      usuario.nome = this.get('nome');
      usuario.imagem64 = this.get('imagem');
      usuario.roles = this.get('roles');
      usuario.usernameDomain = this.get('userDomain');

    }
    return usuario;
  }

  removerUsuarioLogado(): void {
    this.set('authorizationTokenPortalAdm', '');
    this.set('cpf', '');
    this.set('email', '');
    this.set('nome', '');
    this.set('imagem', '');
    this.set('roles', '');
    this.set('userDomain', '');
  }
}

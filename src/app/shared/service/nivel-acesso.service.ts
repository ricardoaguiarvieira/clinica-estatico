import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class NivelAcessoService {
  
  usuario: Usuario;
  constructor(
    private readonly authService: AuthService,
  ) {
    this.usuario = this.authService.getUsuarioLogado();
  }


  verificaAcessoRole(role: string): boolean{

    let isPossueRole = false;
    this.usuario?.roles?.find(element => {
      if (element === role) {       
        isPossueRole = true;   
      } 
    });

    return isPossueRole
  }


  verificaAcessoRoleExterno(role: string, usuario: Usuario): boolean{
    let isPossueRole = false;
    usuario?.roles?.find(element => {
      if (element === role) {       
        isPossueRole = true;   
      } 
    });

    return isPossueRole
  }

  
  verificaAcessoRoleMenu(rolesPermitidas: Record<string, any>, usuario: Usuario): boolean{ 
    const isPossueRole = false;
    for (const role in rolesPermitidas) {
      if (usuario?.roles.includes(rolesPermitidas[role])) {
          return true;
      }
    }
    return isPossueRole
  }
}

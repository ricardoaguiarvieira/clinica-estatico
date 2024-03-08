import { TipoMensagem } from './../tipoMensagem';
import { TipoNotificacao } from 'src/app/shared/model/mensageria/tipo-notificacao';
import { UsuarioMensagem } from './usuario-mensagem';
export class Mensagem {
    codTipoNotificacao?: number;
    id?: number;
    idTipoMensagem?: number;
    indSituacaoAtivo?: string;
    nomTipoMensagem?: string;
    nomTipoNotificacao?: string;
    tsFimPublicacao?: string;
    tsInicioPublicacao?: string;
    txtAssuntoMensagem?: string;
    txtDescricaoMensagem?: string;
    isPublicada = false;
    usuarios: UsuarioMensagem[];
  
    constructor(
        usuarios: UsuarioMensagem[]){
            this.usuarios = usuarios;
    }
}
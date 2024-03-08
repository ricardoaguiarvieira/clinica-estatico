import { Mensagem } from './mensagem';
export class Notificacao {

    icon!:string;
    descricao!:string;
    linkRota!:string;
    tipoNotificacao!:string;
    kind = '';
    mensagem!:Mensagem;

    constructor(){}

}

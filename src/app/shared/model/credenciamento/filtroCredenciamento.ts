import { Page } from '../page';
import { Credenciamento } from './credenciamento';

export class FiltroCredenciamento{
    numSolicitacao: number
    cnpj: string
    nomeFantasia: string
    idSituacao: number
    page?: Page<Credenciamento>

    constructor(){
        this.numSolicitacao = 0;
        this.cnpj = '';
        this.nomeFantasia = '';
        this.idSituacao = 1;
    }
}
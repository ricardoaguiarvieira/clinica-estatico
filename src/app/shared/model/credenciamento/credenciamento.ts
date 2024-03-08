export class Credenciamento {

    numSolicitacao!: number;
    codigoTipoSolicitacao!: number;
    nomeTipoSolicitacao!: string;
    razaoSocial!: string;
    nomeFantasia!: string;
    dataSolicitacao!: Date;
    cpfResponsavel!: string;
    numCnpj!: string;
    codSituacao!: number;
    nomeSituacao!: number;
    selecionado = false;

    constructor() {
        this.selecionado = false;
    }
}
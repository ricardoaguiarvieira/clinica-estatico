export class FiltroPesquisa  {
    idChecklist!:number;
    codigoOrigemSolicitacao!:number;
    dataInicio!:string;
    dataFim!:string;
    codigoServicoAvaliado!:number;

    constructor(idChecklist:number, codigoOrigemSolicitacao:number, codigoServicoAvaliado:number, dataInicio:string, dataFim:string) {
        this.idChecklist = idChecklist;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.codigoServicoAvaliado = codigoServicoAvaliado;
        this.codigoOrigemSolicitacao = codigoOrigemSolicitacao;
    }
}


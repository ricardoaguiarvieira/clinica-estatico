export class    GestaoPagamentoDTO {

    numeroSolicitacao!: number;
    qtdSolicitacao!: number;
    cnpjEscola!: string;
	nomeEscola!: string;
	nomeCurso!: string;
	dataEmissao!: string;
	valor!: number;
    situacao!: string;
    seqBoleto!: string;

    constructor() {}
}
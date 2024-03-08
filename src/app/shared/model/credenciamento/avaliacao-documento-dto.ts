export class AvaliacaoDocumentoDTO {
    tipo = '';
    idCredenciamentoDocumento!: number;
    statusAprovacao!: boolean;
    dataPrazoCorrecao!: Date;
    justificativa!: string;
}
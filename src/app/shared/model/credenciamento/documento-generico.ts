export class DocumentoGenerico {
  idDocumento?: number;
  titulo!: string;
  descDocumento?: string;
  codigoTipoDocumento?: number;
  obrigatorio!: boolean;
  arquivos: ArquivoGenerico[] = [];

  constructor() {}
}

export class ArquivoGenerico {
  idArquivo?: number;
  nomeArquivo?: string;

  constructor() {}
}
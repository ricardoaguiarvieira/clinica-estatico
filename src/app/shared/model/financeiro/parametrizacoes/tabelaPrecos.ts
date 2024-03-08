export class TabelaPrecos {
  id?: number;
  codigo?: string;
  indiceCalculo?: string;
  identificador?: string;
  competencia?: number;
  status?: boolean;
  situacaoTramitacao?: string;
  dataStatus?: Date;
  outroIndice?: string;
  percentualIndice?: number;
  dataInicioVigencia?: string;
  dataFimVigencia?: Date;
  parecerAnalise?: Date;
  valorAtual?: number;
  valorPublicado?: number;
}

export interface PublicacaoTabelaPreco {
  idTabelaPreco?: number;
  arquivos: Arquivo[];
  descricao: string;
}

export interface Arquivo {
  base64Content: string;
  contentType: string;
  originalFilename: string;
}

export interface IArquivoRetorno {
  codigoSistema: number;
  dataAnexo: string;
  id: number;
  idDocumento: number;
  nomeArquivo: string;
  status: boolean;
  tabelaPreco: TabelaPrecos;
}

export interface MultipartFileDTO {
    id: number;
    code: number;
    base64Content: string;
    contentType: string;
    originalFilename: string;
    message?: string;
}
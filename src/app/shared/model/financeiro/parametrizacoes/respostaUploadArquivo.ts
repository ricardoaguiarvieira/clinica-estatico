export class RespostaUploadArquivo {
    idArquivo?: number;
    codSistemaArquivo?: number;
    message?: string;
    status?: number;
  
    constructor() {}
  }
  
  export interface Message {
    codigo: string;
    message: string;
  }
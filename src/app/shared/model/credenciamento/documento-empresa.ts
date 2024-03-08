import { TipoDocumento } from './tipo-documento';

export class DocumentoEmpresa {

    codigoGrupoDocumentoEmpresa?: number;
    nomeGrupoDocumento?: string;
    documentos?: TipoDocumento[];
    
    constructor() {}
}
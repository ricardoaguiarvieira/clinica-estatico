import { TipoDocumento } from './tipo-documento';

export class DocumentoVistoria {

    codigoGrupoDocumentoEmpresa!: number;
    nomeGrupoDocumento!: string;
    listaTipoDocumento!: TipoDocumento[];
    
    constructor() {}
}
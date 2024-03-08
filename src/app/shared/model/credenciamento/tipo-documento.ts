import { CredenciamentoDocEmpresa } from './credenciamento-doc-empresa';

export class TipoDocumento {
    idCredenciamentoDocumento!: number
    idDocumento!: number;
    codigoTipoDocumento?: number;
    codigoDocumentoTipoProfissional?: number;
    codigoDocumentoEmpresa?: number;
    nomeDocumento?: string;
    codTipoSituacaoDoc!: number;
    credenciamentoDoc!: CredenciamentoDocEmpresa[];
    dataValidade!: string;
    mimeType!: string; 
}
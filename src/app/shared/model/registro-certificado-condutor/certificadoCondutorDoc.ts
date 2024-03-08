export class CertificadoCondutorDoc {

	idDocumento?: number;
	idCursoSolicitacao?: number;
	codigoTipoDocumento?: number;
	dataCadastro?: Date;
	dataValidade?: Date;
	dsMotivoPendencia?: string;
	dataPrazoCorrecao?: Date;
	idDocumentoAnexo?: number;
	codigoSistema?: number;
	nomeDocumentoAnexo?: string;
    idUsuarioInclusaoRegistro?: number;
    idUsuarioAlteracaoRegistro?: number;
    dataInclusaoRegistro?: Date;
    dataAlteracaoRegistro?: Date;

    constructor() {}
}

import { DocumentoAnexoDTO } from './DocumentoAnexoDTO';
import { AvaliacaoCertificadoCondutor } from './avaliacaoCertificadoCondutor';
import { CursoServico } from './cursoServico';
import { DadosCurso } from './dadosCurso';

export class SolicitacaoCertificadoCondutor {
    cnpjEscola!: string;
    codigoTipoCurso!: number;
    codigoTipoSituacaoSolicitacao!: number;
    nomeTipoSituacaoSolicitacao!: string;
    cpfCondutor!: string;
    codigoModalidade!: number;
    nomeCondutor!: string;
    numeroSolicitacao!: number;
    numeroRegistroCnh!: string;
    dadosCurso: DadosCurso = new DadosCurso();
    servico: CursoServico = new CursoServico();
    idUsuarioInclusaoRegistro!: string;
    dataSolicitacao?: Date;
    dataInclusao?: Date;
    dataAlteracaoRegistro?: Date;
    indicaCondutoAptoCurso!: string;
    idUsuarioAlteracaoRegistro!: string; 
    documentos!: DocumentoAnexoDTO[];
    avaliacao?: AvaliacaoCertificadoCondutor
}


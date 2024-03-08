import {Escolaridade} from '../../../dominio/habilitacao/model/escolaridade';
import {TipoGenero} from '../../../dominio/habilitacao/model/tipoGenero';
import {Funcao} from '../../../dominio/habilitacao/model/funcao';
import {Categoria} from '../../../dominio/habilitacao/model/categoria';
import {Regiao} from '../../../dominio/habilitacao/model/regiao';

export class BancaExaminadora {

    id: number;

    ordem: number;

    tipoGeneroId: number;

    codigo: string;

    escolaridadeId: number;

    funcaoId: number;

    nome: string;

    tipoCnhId: number;

    regiaoId: number;

    identificaServidorId: number;

    dataUltimaParticipacao: Date;

    celular: string;

    dataNascimento: Date;

    email: string;

    cpf: string;

    registroCnh: string;

    validadeCnh: Date;

    dataPrimeiroCurso: Date;

    dataCursoReciclagem: Date;

    contaBancaria: string;

    dataCadastro: Date;

    numeroRg: string;

    orgaoExpedidorRg: string;

    numeroPis: string;

    lotacao: string;

    servidor: number;

    observacoes: string;

    historico: string;

    constructor(){

    }
}
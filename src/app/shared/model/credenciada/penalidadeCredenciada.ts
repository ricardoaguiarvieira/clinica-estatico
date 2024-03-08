import { TipoPenalidade } from './tipoPenalidade';

export class dadosPenalidade {
    
    id?: number;
    idEmpresaTipoCredenciada!: number;
    dtInicioPenalidade: Date;
    dtFimPenalidade: string;
    tipoPenalidade: TipoPenalidade;
    motivoPenalidade?: string;
    codigoSuspensaoAcesso?: number;
    txtPublicacaoDODF?: string;
    cnpj?: string;
    descricao?: string;
    idTipoPenalidade?: number;
    isEditar?: boolean;
    isShowData?: boolean;
    cpfUsuarioCadastro?: string;
    dtCadastro: string;
    cpfUsuarioUltimaAlteracao?: string;
    dtUltimaAlteracao: string;
    constructor(){
       
    }
}
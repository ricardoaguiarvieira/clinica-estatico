import { Pageable } from '../../pageable';
import { PlanoContasDetran } from './planoContasDetran';

export class FiltroCatalogo extends Pageable {
    id?: number;
    codigo?: string;
    descricao?: string;
    situacaoTramitacao?: string;
    codGetran?: number;
    status?: boolean;
    codGrupo?: number;
    codPcDetran?: number;
    servico?:string;
    idTabelaPreco?: number;
    tabelaPreco?: any;
    getran?: string;
    planoContasDetran?: PlanoContasDetran
    valorPublicado?: number
    valorAtual?: number
}

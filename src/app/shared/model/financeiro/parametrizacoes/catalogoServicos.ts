import { FiltroTabelaPreco } from './filtroTabela';
import { PlanoContasDetran } from './planoContasDetran';
import { TabelaPrecos } from './tabelaPrecos';

export class CatalogoServicos {

    id?: number;
    codigo?: string;
    planoContasDetran?:PlanoContasDetran;
    idTabelaPreco?: number;
    situacaoTramitacao?:string;
    servico?: string;
    getran?: string;
    observacao?: string;
    parecerAnalise?: string;
    status?: boolean;
    dataStatus?: Date;
    tabelaPreco?: FiltroTabelaPreco;
    valor?: string;
    
}

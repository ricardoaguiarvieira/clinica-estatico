import { Pageable } from '../../pageable';

export class FiltroTabelaPreco extends Pageable {

    id?: number;
    codigo?: string;
    valorPublicado?: number;
    identificador?: string;
    situacaoTramitacao?: string;
    status?: boolean;
    dataInicioVigencia?: Date;
    dataFimVigencia?: Date;
    
}

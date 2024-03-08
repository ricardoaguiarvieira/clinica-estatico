import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '../../pageable';
import { FiltroCatalogo } from './filtroCatalogo';
import { SituacaoTramitacaoEnum } from './situacaoTramitacaoEnum';

export class FiltroRequerimentos extends Pageable {

    id?: number;
    situacaoTramitacao?: SituacaoTramitacaoEnum;
    status?: boolean;
    dataStatus?: Date
    descricao?: string
    observacao?: string
    parecerAnalise?: string
    grupoServico?: any
    listCatalogoServico?: FiltroCatalogo[]

}

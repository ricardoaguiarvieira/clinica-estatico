import { PageEvent } from '@angular/material/paginator';
import { Pageable } from './pageable'

export default class ServicoFiltro {

    nomeServico: string;
    page: Pageable;
    indSituacaoAtiva: string;
    codigoTipoCredenciamento: number;

    constructor(){
        const pageEvent : PageEvent = new PageEvent()
        pageEvent.pageIndex= 0;
        pageEvent.pageSize = 10;
        const pageable = new Pageable();
        pageable.setPage(pageEvent)
        this.page = pageable;
        this.nomeServico = '';
        this.indSituacaoAtiva = 'S';
        this.codigoTipoCredenciamento = 0;
    }

}
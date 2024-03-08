import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '../pageable';

export class FiltroMensagem {
    dataFimPeriodo?:	string;
    dataInicoPeriodo?:	string;
    txtAssunto?:	string = '';
    txtDescricao?:	string = '';
    usuario?:	string;
    page?: Pageable

    constructor(){
        const pageEvent : PageEvent = new PageEvent()
        pageEvent.pageIndex= 0;
        pageEvent.pageSize = 10;
        const pageable = new Pageable();
        pageable.setPage(pageEvent)
        this.page = pageable;
    }
}
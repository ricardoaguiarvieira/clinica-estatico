import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '../pageable';


export class FiltroRegistroCertificado{
    cpf?: string;
    cnpjEscola?: string;
    nomeEscola?: string;
    dtInicio?: string;
    dtFim?: string;
    page: Pageable;
    nomeCurso?: string;
    modalidade?: string;
    idSituacao?: string;

    constructor(){
        const pageEvent : PageEvent = new PageEvent()
        pageEvent.pageIndex= 0;
        pageEvent.pageSize = 10;
        const pageable = new Pageable();
        pageable.setPage(pageEvent)
        this.page = pageable;
        
    }
}
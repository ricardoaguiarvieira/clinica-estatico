import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '../../pageable';

export class FiltroGrupoServico extends Pageable {

    id?: number;
    codigo?: string
    descricao?: string;
    status?: boolean;
    dataStatus?: Date
    // page: Pageable;
    
    
    // constructor(){
    //     const pageEvent : PageEvent = new PageEvent();
    //     const pageable = new Pageable();
    //     pageable.setPage(pageEvent)
    //     this.page = pageable;
        //this.nivelContaGdf = 0;
        //this.tipoContaGdf = 0;
        //this.pcSiggoGdf = '';
       // this.status = '';
    // }
}

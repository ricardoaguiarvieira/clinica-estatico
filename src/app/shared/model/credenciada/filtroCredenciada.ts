import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '../pageable';

export class FiltroCredenciada{
    cnpj: string
    nomeEmpresarial: string
    codigoTipoSituacao: number
    codigoTipoCredenciamento: number
    credenciadasHabilitadas: Array<string>
    page: Pageable

    constructor(){
        const pageEvent : PageEvent = new PageEvent()
        pageEvent.pageIndex= 0;
        pageEvent.pageSize = 50;
        const pageable = new Pageable();
        pageable.setPage(pageEvent)
        this.page = pageable;
        this.cnpj = '';
        this.nomeEmpresarial = '';
        this.codigoTipoSituacao = 0;
        this.codigoTipoCredenciamento = 0;
        this.credenciadasHabilitadas = [];
    }
}
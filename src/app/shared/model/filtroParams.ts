import { HttpParams } from '@angular/common/http';

export class FiltroParams {

 
    readonly ITENS_POR_PAGINA = 5;
    public params: HttpParams;

     constructor(pagina: any, pageSize: number) {
        this.params = new HttpParams()
            .append('page', pagina)
            .append('size', pageSize.toString());
        //.append('sort', sort.toString());
    }
}
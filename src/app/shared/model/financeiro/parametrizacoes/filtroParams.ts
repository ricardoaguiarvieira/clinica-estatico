import { HttpParams } from '@angular/common/http';
export class FiltroParams {

    readonly ITENS_POR_PAGINA = 5;
    public params: HttpParams;

    constructor(pagina: any) {
        this.params = new HttpParams()
       .append('page', pagina)
       .append('size', this.ITENS_POR_PAGINA.toString());
       //.append('sort', sort.toString());
    }
}

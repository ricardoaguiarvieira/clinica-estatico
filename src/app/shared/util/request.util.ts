import { HttpParams } from '@angular/common/http';
import { Pageable } from '../model/pageable';

export class RequestUtil {
  static getRequestParams = (pageable: Pageable): HttpParams => {
    let params: HttpParams = new HttpParams();
    if (pageable == null) {
      return params;
    }

    params = params.append('page', pageable.page.toString());
    params = params.append('size', pageable.size.toString());
    if (pageable.sort != null) {
      params = params.append('sort', pageable.sort);
    }
    return params;
  };
}

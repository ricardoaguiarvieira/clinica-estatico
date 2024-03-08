import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export class AppClient {
  constructor(
    private readonly http: HttpClient,
    private readonly basePath: string,
  ) { }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.basePath}${path}`);
  }

  /* getList<T>(path: string, body?: any): Observable<HttpEvent<T>> {
    return this.http.get<T>(`${this.basePath}${path}`, body);
  } */


  getList<T>(path: string, options?: any): Observable<unknown> {
    return this.http.get<T>(`${this.basePath}${path}`, options);
 }

  /*getPdf<T>(path: string): Observable<ArrayBuffer> {
    return this.http.get<ArrayBuffer>(`${this.basePath}${path}`, {
      responseType: 'arraybuffer' as 'json'
    });
  }*/

  getXls<T>(path: string, body?: any): Observable<HttpEvent<T>> {
    return this.http.get<T>(`${this.basePath}${path}`, body);
  }

  getPdf<T>(path: string, body?: any): Observable<HttpEvent<T>> {
    return this.http.get<T>(`${this.basePath}${path}`, body);
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.basePath}${path}`, body);
  }

  posttriagem<T>(path: string, body?: any, options?: any): Observable<HttpEvent<T>> {
    return this.http.post<T>(`${this.basePath}${path}`, body, options);
  }

  postUpload<T>(path: string, body?: any, options?: any): Observable<HttpEvent<T>> {
    return this.http.post<T>(`${this.basePath}${path}`, body, options);
  }

  postSSOToken<T>(path: string, body?: any, options?: any): Observable<any> {
    return this.http.post<any>(`${this.basePath}${path}`, body, options);
  }

  put<T>(path: string, body?: any): Observable<T> {
    return this.http.put<T>(`${this.basePath}${path}`, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.basePath}${path}`);
  }
}

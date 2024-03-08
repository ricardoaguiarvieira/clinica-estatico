import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MultipartFileDTO } from '../model/credenciamento/multipart-file-dto';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private documento = new BehaviorSubject<MultipartFileDTO>(new MultipartFileDTO());
  private idCredenciamentoDocumento = new BehaviorSubject<number>(0);

  constructor() { }


  setIdCredenciamentoDocumento(idCredenciamentoDocumento: number): void {
    this.idCredenciamentoDocumento.next(idCredenciamentoDocumento);

  }

  getIdCredenciamentoDocumento(): Observable<number> {
    return this.idCredenciamentoDocumento.asObservable();
  }

  setDocumento(documento: MultipartFileDTO): void {
    this.documento.next(documento);
  }

  getDocumento(): Observable<MultipartFileDTO> {
    return this.documento.asObservable();
  }

}

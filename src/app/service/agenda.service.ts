import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AgendaDetista } from "../interface/agenda-dentista.interface";

@Injectable({
    providedIn: 'root'
})
export class AgendaService {

    URL_API = environment.pathApi.AGENDA;

    constructor(private http: HttpClient) { }

    /*
    *  Recupera agendamentos por data. formato 'dd/mm/yyyy'
    */
    getAgendaPorData(data: string): Observable<AgendaDetista> {
        return this.http.get<AgendaDetista>(`${this.URL_API}${data}`);
    }

}
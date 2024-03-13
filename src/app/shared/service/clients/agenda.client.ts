import { environment } from 'src/environments/environment';
import { AppClient } from '../app-client';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from '../../interface/agenda';


export class AgendaClient{

    private readonly client: AppClient;

    
    constructor(http: HttpClient) {
        const urlAgenda = environment.dns.PORTAL_API;
        this.client = new AppClient(
        http, `${urlAgenda}/agenda`);
    }

    agendamentos(data: string): Observable<Agenda> {
        return this.client.get(`/${data}`);
    }

    horarios(): Observable<string[]> {
        return this.client.get('/horarios');
    }
}
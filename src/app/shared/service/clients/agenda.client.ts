import { environment } from 'src/environments/environment';
import { AppClient } from '../app-client';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


export class AgendaClient{

    private readonly client: AppClient;
    
    constructor(http: HttpClient) {
        const urlAgenda = environment.dns.PORATAL_API;
        this.client = new AppClient(
        http, `${urlAgenda}/agenda`);
    }

    agendamentos(data: string): Observable<HttpEvent<any>> {
        return this.client.get(`/${data}`);
    }
}
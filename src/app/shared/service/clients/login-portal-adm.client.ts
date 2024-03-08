import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/shared/model/usuario';
import { LocalStorageService } from '../local-storage.service';
import { UserLogin } from '../../model/user/UserLogin';
import { User } from '../../model/user/User';

export class LoginPortalAdmClient {

  public usuarioLogado = new Subject<Usuario>();
  private currentUserSource = new ReplaySubject<User>(1);
  public currentUser$ = this.currentUserSource.asObservable();
  private URI_USUARIO = '/area-publica/usuario';

  private readonly basePathUsuarioPortal: string = `${environment.dns.PORATAL_API}`;

  constructor(
    private http: HttpClient,
    private readonly localStorageService: LocalStorageService
    ) { }

  login(user: UserLogin): Observable<void> {
    const url = `${this.basePathUsuarioPortal}${this.URI_USUARIO}/login`;
    return this.http.post<User>(url, user).pipe(
      take(1),
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user)
        }
      })
    );
  }

  refreshToken():Observable<User> {    
    const url = `${this.basePathUsuarioPortal}${this.URI_USUARIO}/refresh-token`;
    const headers = new HttpHeaders({'refresh-token':this.localStorageService.get('refreshTokenPortalAdm') as string});
    return this.http.get<User>(url, {headers});
  }

  logout(): void {
    this.localStorageService.clear();
    this.currentUserSource.next(undefined);
    this.currentUserSource.complete();
  }

  setCurrentUser(user: User): void {
    localStorage.setItem('authorizationTokenPortalAdm', JSON.stringify(user.access_token));
    localStorage.setItem('refreshTokenPortalAdm',  JSON.stringify(user.refresh_token));

    this.localStorageService.gravarUsuarioLogado(JSON.stringify(user.access_token));
    this.currentUserSource.next(user);
  }

  getUsuarioLogado(): Usuario {
    const usuario = this.localStorageService.retornarUsuarioLogado();

    if (!usuario.isTokenValido) {
      this.logout();
    } 

    return usuario;
  }

  getAuthorizationToken(): string {
    return this.localStorageService.get('authorizationTokenPortalAdm') as string;
  }

  manterConectado(valor:boolean) {
    localStorage.setItem('manterConectado', JSON.stringify(valor));
  }

}

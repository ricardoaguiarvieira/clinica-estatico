import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private show = new BehaviorSubject(false);

  constructor() {}

  setShow(show: boolean): void {
    this.show.next(show);
  }

  getShow(): Observable<boolean> {
    return this.show.asObservable();
  }
}

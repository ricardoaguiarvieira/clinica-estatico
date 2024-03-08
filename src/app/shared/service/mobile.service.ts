import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  constructor() {}

  public onHaveMobileScreen(): boolean {
    let mobileScreen: boolean;
    window.innerWidth > 1024 ? (mobileScreen = false) : (mobileScreen = true);
    return mobileScreen;
  }
}

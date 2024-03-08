import { Component } from '@angular/core';
import { AlertsService } from './layout-servicos/alerts/alerts.service';
import { Event, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type0 = 'success';
  type1 = 'alert';
  type2 = 'error';
  message =
    'Iste provident, ipsam dolores aperiam nulla quos itaque similique adipisci ipsa accusamus nam exercitationem.';
  isHome = true;
  homeStyle = 'app-main-wrapper';

  constructor(
    public readonly alertsService: AlertsService,
    public router: Router
  ) {
    router.events
    .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
    .subscribe((e: RouterEvent) => {
      document.body.scrollTo(0, 0);
    });
  }
}

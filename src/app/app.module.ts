import { LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuardInterno } from './shared/core/guards/auth.guard.interno';
import { AuthGuardExterno } from './shared/core/guards/auth.guard.externo';
import { HttpErrorInterceptor } from './shared/core/interceptors/http-error-interceptor.service';
import { LoaderInterceptor } from './shared/core/interceptors/loader-interceptor.service';
import { AuthService } from './shared/service/auth.service';
import { MobileService } from './shared/service/mobile.service';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
// import { ParameterHashLocationStrategy } from './ParameterHashLocation';
import { LoaderComponent } from './layout-servicos/loader/loader.component';
import { AlertsComponent } from './layout-servicos/alerts/alerts.component';
import { HeaderInterceptorService } from './shared/core/interceptors/header-interceptor.service';


registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    LoaderComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot('UA-152973089-1'),
    NgxGoogleAnalyticsRouterModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [
    // {
		// 	provide: LocationStrategy,
		// 	useClass: ParameterHashLocationStrategy
		// },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true },
    AuthService,
    AuthGuardInterno,
    AuthGuardExterno,
    MobileService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

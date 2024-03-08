
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { FooterPortalAdmComponent } from './footer/footer-portal-adm.component';

import { SidenavComponent } from './sidenav-interno/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeImageComponent } from './home-image/home-image.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    FlexLayoutModule,
    MatInputModule,
    MatGridListModule,
    ComponentsRoutingModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  declarations: [
    SidenavComponent,
    HeaderComponent,
    FooterPortalAdmComponent,
    HomeImageComponent,
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    FooterPortalAdmComponent,
    HomeImageComponent,
  ]
})
export class ComponentsModule { }

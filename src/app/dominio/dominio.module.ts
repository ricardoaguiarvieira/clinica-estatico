import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalAdministrativoDominioRoutingModule } from './dominio-routing.module';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PortalAdministrativoDominioRoutingModule,
    ComponentsModule,
  ]
})
export class PortalAdministrativoDominioModule { }

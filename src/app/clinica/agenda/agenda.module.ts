import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './agenda.component';
import { AgendaRoutingModule } from './agenda-routing.module';

@NgModule({
  declarations: [ AgendaComponent ],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ],
  exports: [],
})
export class AgendaModule {}

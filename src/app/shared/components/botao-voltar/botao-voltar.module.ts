import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { BotaoVoltarComponent } from './botao-voltar.component';


@NgModule({
  declarations: [ BotaoVoltarComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [ BotaoVoltarComponent ]
})
export class BotaoVoltarModule { }

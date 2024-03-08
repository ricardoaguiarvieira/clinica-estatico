import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetranComponent } from './card-detran.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { InsideAlertModule } from 'src/app/layout-servicos/alerts/inside/inside.module';
import { BotaoVoltarModule } from '../botao-voltar/botao-voltar.module';



@NgModule({
  declarations: [
    CardDetranComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    BotaoVoltarModule,
    InsideAlertModule
  ],
  exports:[CardDetranComponent]
})
export class CardDetranModule { }

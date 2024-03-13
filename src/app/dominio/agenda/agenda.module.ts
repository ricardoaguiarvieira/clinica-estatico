import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CardLabelModule } from 'src/app/layout-servicos/card-label/card-label.module';
import { BotaoVoltarModule } from 'src/app/shared/components/botao-voltar/botao-voltar.module';
import { CardDetranModule } from 'src/app/shared/components/card-detran/card-detran.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MatRadioModule } from '@angular/material/radio';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendarComponent } from './agendamento/agendar/agendar.component';

@NgModule({
  declarations: [
    AgendamentoComponent,
    AgendarComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    CardDetranModule,
    CardLabelModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
    NgxMatSelectSearchModule,
    ComponentsModule,
    MatDialogModule,
    BotaoVoltarModule, 
    MatTooltipModule
  ],
  exports: [
    AgendamentoComponent

  ],
})
export class AgendaModule {}

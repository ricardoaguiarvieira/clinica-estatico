import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker/datepicker-base';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { AlertsService } from 'src/app/layout-servicos/alerts/alerts.service';
import { Agenda } from 'src/app/shared/interface/agenda';
import { Credenciada } from 'src/app/shared/model/credenciada/credenciada';
import { TipoCredenciada } from 'src/app/shared/model/credenciada/tipo-credenciada';
import { Pageable } from 'src/app/shared/model/pageable';
import Servico from 'src/app/shared/model/servico';
import { IndSituacaoAtiva } from 'src/app/shared/model/servicos/indicador-situacao-ativa';
import { PortalService } from 'src/app/shared/service/portal.service';
import { AgendarComponent } from './agendar/agendar.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit{

  agenda!: Agenda;
  date = moment(new Date());
  data!: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private paramRecivier : ActivatedRoute,
    private readonly alertsService: AlertsService,
    private dialogRef: MatDialog,
    private readonly portalService: PortalService
  ) {
  }
  
  ngOnInit(): void {
    this.data = this.formateData();
    this.getAgendamentosDia();
  }

  getAgendamentosDia(): void{
    this.portalService.agendaClient.agendamentos(this.data)
    .subscribe((res: Agenda) => {this.agenda = res;});
  }

  formateData(): string {
    return this.date.format('YYYY-MM-DD')
  }

  voltar() : void{
    this.router.navigateByUrl('/');
  }

  detalharAgendamento(agendamento: any): void {
    console.log('agendamento', agendamento);
    document.body.scrollTo(0, 0);
    this.dialogRef.open(AgendarComponent, {
      data: agendamento,
      width: '700px',
      height: '300px',
    })
  }

  changeData(): void{
    this.getAgendamentosDia();
  }
  proximoDia(): void{
    this.date.add(1, 'd');
    this.data = this.formateData();
    this.getAgendamentosDia();
  }

  anteriorDia(): void{
    this.date.add(-1, 'd');
    this.data = this.formateData();
    this.getAgendamentosDia();
  }

}

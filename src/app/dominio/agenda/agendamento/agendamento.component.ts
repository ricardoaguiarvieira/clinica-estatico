import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertsService } from 'src/app/layout-servicos/alerts/alerts.service';
import { Agenda } from 'src/app/shared/interface/agenda';
import { Credenciada } from 'src/app/shared/model/credenciada/credenciada';
import { TipoCredenciada } from 'src/app/shared/model/credenciada/tipo-credenciada';
import { Pageable } from 'src/app/shared/model/pageable';
import Servico from 'src/app/shared/model/servico';
import { IndSituacaoAtiva } from 'src/app/shared/model/servicos/indicador-situacao-ativa';
import { PortalService } from 'src/app/shared/service/portal.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit{

  // formCadastro! : FormGroup;
  // formValor! : FormGroup;
  // servicoRecebido? : Servico;
  // id?: number;
  // credenciadasVinculadas: Credenciada[] = [];
  // displayedColumns: string[] = ['cnpj', 'razaoSocial', 'nomeFantasia', 'ramo', 'valor', 'status', 'acao'];
  // viewTemplate = 'cadastro';
  // tiposCredenciada!: Observable<TipoCredenciada[]>;
  // status!: Observable<IndSituacaoAtiva[]>
  // idPassed!: string | null; 
  // pagination: Pageable = new Pageable();
  // dataSource = new MatTableDataSource<Credenciada>();

  agenda!: Agenda;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private paramRecivier : ActivatedRoute,
    private readonly alertsService: AlertsService,
    private readonly portalService: PortalService
  ) {
  }


  tabela = {
    cabecalho: [ {titulo: 'DR A'}, {titulo: 'DR B'}, {titulo: 'DR C'}],
    horarios: [
      {
        hora: '15:00',
        agendamentos: [{id: 2, descricao: 'teste de agendamento'}, {id: 3, descricao: 'teste de agendamento 2'}, {id: 4, descricao: 'teste de agendamento 3'}]
      },
      {
        hora: '15:30',
        agendamentos: [{id: 2, descricao: 'teste de agendamento'}, {id: 3, descricao: 'teste de agendamento 2'}, {id: 4, descricao: 'teste de agendamento 3'}]
      },
      {
        hora: '16:00',
        agendamentos: [{id: 2, descricao: 'teste de agendamento'}, {id: 3, descricao: 'teste de agendamento 2'}, {id: 4, descricao: 'teste de agendamento 3'}]
      }
    ]
  }
  
  ngOnInit(): void {
    console.log('agenda');
    this.portalService.agendaClient.agendamentos('12-03-2024')
    .subscribe((res: Agenda) => {
      this.agenda = res;
      console.log('response', res)
    }
    );
  }

  voltar() : void{
    this.router.navigateByUrl('/');
  }

  alterarAgendamento(agendamento: any): void{
    console.log('agendamento', agendamento);
    
  }

}

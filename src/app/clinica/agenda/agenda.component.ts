import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendaDetista } from 'src/app/interface/agenda-dentista.interface';
import { AgendaService } from 'src/app/service/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  horarios$: Observable<string[]>
  agendamentosDentistas$: Observable<AgendaDetista[]>

  constructor(
    private readonly agendaService: AgendaService
  ) { }

  ngOnInit(): void {

    this.horarios$ = this.agendaService.getHorarios().pipe();
    this.agendamentosDentistas$ = this.agendaService.getAgendaPorData('23-06-2022').pipe();
  }

}

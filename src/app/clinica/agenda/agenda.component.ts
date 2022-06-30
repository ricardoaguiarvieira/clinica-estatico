import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/service/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(
    private readonly agendaService: AgendaService
  ) { }

  ngOnInit(): void {
    this.agendaService.getAgendaPorData('23/06/2022').pipe()
      .subscribe(data => console.log(data)
    )
  }

}

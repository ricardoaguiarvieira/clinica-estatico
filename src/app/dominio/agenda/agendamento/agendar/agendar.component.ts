import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Observable, of } from "rxjs";
import { Agendamento } from "src/app/shared/interface/agendamento";
import { PortalService } from "src/app/shared/service/portal.service";

@Component({
    selector: 'app-agenda',
    templateUrl: './agendar.component.html',
    styleUrls: ['../agendamento.component.scss']
  })
  export class AgendarComponent implements OnInit{
    
    form!: FormGroup;
    horariosDisponivel: Observable<string[]> = this.portalService.agendaClient.horarios();

    constructor(
        private readonly fb: FormBuilder,
        private readonly portalService: PortalService,
        public dialogRef: MatDialogRef<AgendarComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Agendamento
    ){
    }
    ngOnInit(): void {
        this.form = this.fb.group({
            horario: ['']
        })
        // this.horariosDisponivel = this.portalService.agendaClient.horarios();
        // console.log('modal', this.data);
        // horariosDisponiveis

    }


    fecharModal(){
        this.dialogRef.close()
    }

    gravarAgendamento(){

    }


  
}
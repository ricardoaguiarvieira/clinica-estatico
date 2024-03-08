
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.scss'],
})
export class BotaoVoltarComponent implements OnInit {
  
  @Input()
  mostrarBotao = true;

  @Output()
  acaoVoltarEmiter = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  voltar(){
    this.acaoVoltarEmiter.emit('');
    this.router.navigate(['home'], {});
  }

}

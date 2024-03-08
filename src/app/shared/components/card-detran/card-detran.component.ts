import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { IconeCardEnum } from './icone-card.enum';
import { BotaoCardDetran } from './model/botao-card-detran.model';

@Component({
  selector: 'app-card-detran',
  templateUrl: './card-detran.component.html',
  styleUrls: ['./card-detran.component.scss']
})
export class CardDetranComponent {


  @Input()
  tituloCard: string;

  @Input()
  descricao: string;

  @Input()
  tituloConteudo: string;

  @Input()
  botao01: BotaoCardDetran;

  @Input()
  botao02: BotaoCardDetran;

  @Input()
  botao03: BotaoCardDetran;

  @Output()
  eventoBotaoVoltar = new EventEmitter();


  @ContentChild('conteudoAlerta') conteudoAlerta: ElementRef;

  @Input()
  buttonVoltar = true;

  @Input()
  tipoAlerta = 'alert';

  iconeClass = 'forms-wrapper-label';

  @Input() set iconeCard(iconeCard: IconeCardEnum) {
    this.iconeClass = `${this.iconeClass} ${iconeCard}`;
  }

  tratarEventoBtnVoltar(): void{
    this.eventoBotaoVoltar.emit();
  }

}

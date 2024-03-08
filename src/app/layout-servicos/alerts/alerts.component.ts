/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Component, Input, OnInit } from '@angular/core';

import { AlertsService } from './alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
  @Input() type = '';
  @Input() message = '';

  title = '';
  icon = '';
  colours = '';

  options: any = {
    alert: {
      title: 'Alerta!',
      icon: 'report_problem',
    },
    error: {
      title: 'Erro!',
      icon: 'info_outline',
    },
    success: {
      title: 'Sucesso!',
      icon: 'done',
    },
  };

  constructor(private readonly alertsService: AlertsService) { }

  ngOnInit(): void {
    this.title = this.options[`${this.type}`].title;
    this.icon = this.options[`${this.type}`].icon;
    this.colours = `alerts-wrapper_${this.type}`;
    this.messagesByHttpStatus();
  }

  fecharAlerta(): void {
    this.alertsService.alerta.show = false;
  }

  private messagesByHttpStatus(): void {
    //console.log('this.message: ', this.message);
    if (
      this.message.includes('403')
      || this.message.includes('401')
      || this.message.includes('Unknown')
      || (this.message.includes('failure') && !this.message.includes('500'))
      // || this.message.includes('500')
    ) {
      this.message =
        'Infelizmente algo deu errado… por favor, tente novamente em alguns instantes.';
    } else if (this.message.includes('503')) {
      this.icon = 'info_outline';
      this.colours = this.colours = 'alerts-wrapper_error';
      this.title = 'Erro!';
      this.message =
        'Infelizmente algo deu errado… por favor, aguarde alguns instantes e tente novamente mais tarde.';
    } else if (this.message.includes('422')) {
      this.message =
        'Cadastro não encontrado, favor verifique os dados e consulte novamente.';
    }
  }
}

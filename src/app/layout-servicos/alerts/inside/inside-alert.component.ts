import { Component, OnInit, Input } from '@angular/core';

export interface AlertOptions {
  alert: {
    title: string;
    icon: string;
  };
  error: {
    title: string;
    icon: string;
  };
  success: {
    title: string;
    icon: string;
  };
}

@Component({
  selector: 'app-inside-alert',
  templateUrl: './inside-alert.component.html',
  styleUrls: ['./inside-alert.component.scss'],
})
export class InsideComponent implements OnInit {
  @Input() type = '';
  @Input() message = '';

  title = '';
  icon = '';
  colours = '';

  options: AlertOptions = {
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

  ngOnInit(): void {
    // Repetição de if por conta do Lint - otimizar essa etapa:
    if (this.type == 'alert') {
      this.title = this.options.alert.title;
      this.icon = this.options.alert.icon;
      this.colours = 'alerts-wrapper_alert';
    }
    else if (this.type == 'success') {
      this.title = this.options.success.title;
      this.icon = this.options.success.icon;
      this.colours = 'alerts-wrapper_success';
    }
    else if (this.type == 'error') {
      this.title = this.options.error.title;
      this.icon = this.options.error.icon;
      this.colours = 'alerts-wrapper_error';
    }
  }
  
  /*
      this.title = this.options[`${this.type}`].title;
    this.icon = this.options[`${this.type}`].icon;
    this.colours = `alerts-wrapper_${this.type}`;
  */
}

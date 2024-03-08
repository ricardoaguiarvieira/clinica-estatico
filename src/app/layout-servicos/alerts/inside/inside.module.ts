import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideComponent } from './inside-alert.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [InsideComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [InsideComponent],
})
export class InsideAlertModule {}

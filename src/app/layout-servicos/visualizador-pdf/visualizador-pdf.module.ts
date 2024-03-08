import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizadorPdfComponent } from './visualizador-pdf.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    VisualizadorPdfComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [VisualizadorPdfComponent]
})
export class VisualizadorPdfModule { }

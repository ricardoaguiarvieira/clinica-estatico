import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [InvoiceComponent],
})
export class InvoiceModule {}
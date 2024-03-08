import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputCodDirective } from './directives/input-tel.directive';

@NgModule({
  declarations: [InputCodDirective],
  imports: [CommonModule],
  exports: [InputCodDirective],
})
export class SharedModule {}

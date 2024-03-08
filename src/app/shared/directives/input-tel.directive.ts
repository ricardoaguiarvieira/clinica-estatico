/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { AbstractEntity } from '../model/financeiro/parametrizacoes/abstractEntity';

@Directive({
 // eslint-disable-next-line @angular-eslint/directive-selector
 selector: 'input[type=cod]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCodDirective,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputCodDirective,
      multi: true,
    },
  ],
})
export class InputCodDirective implements ControlValueAccessor, Validator {
  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    private _renderer: Renderer2
  ) { }

  @HostListener('input', ['$event.target.value'])
  onInput = (_: any) => { };

  writeValue(value: AbstractEntity | null): void {
    const entity = value || new AbstractEntity();
    this._renderer.setAttribute(
      this._elementRef.nativeElement,
      'value',
      entity.toString()
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  registerOnChange(fn: any): void {
    this.onInput = (value: string) => {
      const entity = new AbstractEntity();
      entity.codigo = value
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
      //fn(entity);
    };
  }

  registerOnTouched(fn: any): void { }

  validate(control: AbstractControl): ValidationErrors | null {
    const entity = control.value as AbstractEntity;
    return entity.isValid() ? null : { entity: true };
  }
}

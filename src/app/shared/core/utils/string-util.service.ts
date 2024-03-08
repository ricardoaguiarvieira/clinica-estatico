import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringUtilService {
  constructor() { }

  /**
   * DEFAULT PATTERNS (https://www.npmjs.com/package/ngx-mask)
   * 0 	digits (like 0 to 9 numbers)
   * 9 	digits (like 0 to 9 numbers), but optional
   * A 	letters (uppercase or lowercase) and digits
   * S 	only letters (uppercase or lowercase)
   * */
  placaMask = 'SSS0A00';
  renavamMask = '00000000000';
  crvMask = '000000000000';
  cpfMask = '000.000.000-009';
  cpfMaskBlur = '000.000.000-00';
  cnpjMask = '00.000.000/0000-00';
  cepMask = '00.000-000'

  precederZerosEsquerda(valor: string, padChar: string, size: number): string {
    if (valor.length === 0) {
      return '';
    }
    return (String(padChar).repeat(size) + valor).substr(size * -1, size);
  }
}

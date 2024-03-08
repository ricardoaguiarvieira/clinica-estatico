import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { cnpj, cpf } from 'cpf-cnpj-validator';

export function validadorCpfCnpj(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => { 
    if (control && control.value) {
      const valor: string = control.value as string;
      return isCpfCnpjValido(control.value) ? { cpfCnpjInvalido: { value: valor } } : null;
      // return isCpfCnpjValido(control.value as string) ? { cpfCnpjInvalido: { value: control.value } } : null;
    }
    return null;
  };
}

function isCpfCnpjValido(cpfCnpj: string): boolean {
  let valido = false;
  if (cpfCnpj.length <= 11 && !cpf.isValid(cpfCnpj)) {
    valido = true;
    //erro de CPF invalido
  } else if (cpfCnpj.length < 14 && !cpf.isValid(cpfCnpj)) {
    //erro de CPF invalido com mascara
    valido = true;
  } else if (cpfCnpj.length > 11 && !cnpj.isValid(cpfCnpj)) {
    valido = true;
  }

  return valido;
}

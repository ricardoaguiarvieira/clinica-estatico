import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validadorNotEqual(texto:string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log('***** DIRETIVA DE NOT EQUAL ', control.value, texto );
        if(control && control.value){
            const valor:string = control.value as string;
            return valor === texto ? { textoEqual: { value: valor } } : null;
            
        }
        return null;
    }
}
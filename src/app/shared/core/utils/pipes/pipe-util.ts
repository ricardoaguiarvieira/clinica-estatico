import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'placa' })
export class PlacaPipe implements PipeTransform {
    transform(value: string|number): string {
        // Padrao AAA9999
        const regex = /^(\w{3})(\d{4})$/
        return value.toString().replace(regex, '$1-$2');
    }
}

@Pipe({ name: 'dataDetran' })
export class DataPipe implements PipeTransform {
    transform(value: string|number): string {
        // Padrao YYYYMMDD
        const regex = /^(\d{4})(\d{2})(\d{2})$/
        return value.toString().replace(regex, '$3/$2/$1');
    }
}

@Pipe({ name: 'cnpj' })
export class CNPJPipe implements PipeTransform {
    transform(value: string|number): string {
        // Padrao 99999999999999
        const regex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
        return value.toString().replace(regex, '$1.$2.$3/$4-$5');
    }
}

@Pipe({ name: 'cpf'})
export class CPFPipe implements PipeTransform {
    transform(value: string|number): string {
        const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
        return String(value)
            .padStart(11, '0')
            .substring(0, 11)
            .replace(regex, '$1.$2.$3-$4');
    }

}

@Pipe({ name: 'hora' })
export class HoraPipe implements PipeTransform {
    transform(value: string|number): string {
        // Padrao 999999
        const regex = /^(\d{2})(\d{2})(\d{2})$/
        return value.toString().replace(regex, '$1:$2:$3');
    }

    // valorFormatado = valorFormatado
    //         .padStart(11, '0')                  // item 1
    //         .substr(0, 11)                      // item 2
    //         .replace(/[^0-9]/, '')              // item 3
    //         .replace(                           // item 4
    //             /(\d{3})(\d{3})(\d{3})(\d{2})/,
    //             '$1.$2.$3-$4'
    //         );
}

@Pipe({name: 'validDate'})
export class ValidDatePipe implements PipeTransform {

    transform(value: string): string {

        const date = moment(new Date(value));
        const today = moment().locale('pt-br');
        if(!date.isValid()) {
            return 'black';
        }
        if (date > today) {
            return 'black';
        }else {
            return 'red';
        }
    }


}

@Pipe({name: 'dateMorethanFiveYears'})
export class dateMoreThanFiveYear implements PipeTransform {

    transform(value: string): string {

        const date = moment(new Date(value));
        const today = moment().locale('pt-br')

        if(!date.isValid()) {
            return 'black';
        }
        if ((today.diff(date, 'year')) < 5) {
            return 'black';
        }else {
            return 'red';
        }
    }

}
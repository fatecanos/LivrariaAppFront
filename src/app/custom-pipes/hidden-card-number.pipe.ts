import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'hiddenCardNumber'})
export class HiddenCardNumberPipe implements PipeTransform {

    transform(value: string) {
        const rgx = /\d\d\d\d.\d\d\d\d.\d\d\d\d./;
        const aux = value ? value.replace(rgx, '****') : '';
        return aux;
    }
}
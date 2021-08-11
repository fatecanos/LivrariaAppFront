import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'moneyFormatter'})
export class MoneyFormmatter implements PipeTransform{

    transform(value: number) {
        return new Intl.NumberFormat('pt-BR', 
            { style: 'currency', currency: 'BRL' }
        ).format(value);
    }
}
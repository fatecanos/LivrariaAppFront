import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FaturamentoProduto } from 'src/app/models/interfaces/dto/graficos.interface';
import { mockResponseFaturamentoProd } from './mock';

@Component({
   selector: 'liv-faturamento-produtos',
   templateUrl: './liv-faturamento-produtos.component.html',
   styleUrls: ['./liv-faturamento-produtos.component.scss']
})
export class LivFaturamentoProdutosComponent implements OnChanges {

   @Input() dadosFaturamentoProdutos: FaturamentoProduto[] = mockResponseFaturamentoProd;

   title = 'Faturamento mensal por produto';
   type = 'LineChart';

   data: any[] = [];
   columnNames: Array<string> = [];
   options = {
      hAxis: {
         title: 'Mes/Ano'
      },
      vAxis: {
         title: 'Faturamento(R$)'
      },
      curveType: 'function'
   };
   width = 900;
   height = 700;

   ngOnChanges(changes: SimpleChanges): void {
      console.log(this.dadosFaturamentoProdutos);
      
      let newArrData = [];

      newArrData = this.dadosFaturamentoProdutos?.map((response, i) => {
         let auxFiltered = this.dadosFaturamentoProdutos.filter((data) => {
            return data.data === response.data
         })
         console.log("Meses encontrados", auxFiltered);

         let values = auxFiltered.map(response => { 
            return response.faturamento
         })

         if(i === this.dadosFaturamentoProdutos.length-1) {
            this.columnNames = ['Mês/Ano', ...auxFiltered.map(response => {
               return response.nomeLivro
            })]
         }
         return [`${response.data}`, ...values]
      })
      
      console.log(`Array tratado`, newArrData);
      console.log("Array de colunas:", this.columnNames);
      
      this.data = newArrData;
   }

}

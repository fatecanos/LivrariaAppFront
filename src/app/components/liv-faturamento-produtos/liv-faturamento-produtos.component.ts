import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FaturamentoProduto } from 'src/app/models/interfaces/dto/graficos.interface';
import { mockResponseFaturamentoProd } from './mock';

@Component({
   selector: 'liv-faturamento-produtos',
   templateUrl: './liv-faturamento-produtos.component.html',
   styleUrls: ['./liv-faturamento-produtos.component.scss']
})
export class LivFaturamentoProdutosComponent implements OnChanges {

   @Input() dadosFaturamentoProdutos: FaturamentoProduto[] = mockResponseFaturamentoProd;
   @Input() qtdeColunas: number = 1;

   @Output() atualizar = new EventEmitter<string>();

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

         let datas = this.dadosFaturamentoProdutos.filter((data) => {
            return data.data === response.data
         })

         console.log("Meses encontrados", datas);

         let faturamentosPorData = datas.map(response => { 
            return response.faturamento
         })

         if(i === this.dadosFaturamentoProdutos.length-1) { //estamos na ultima posição?
            this.columnNames = ['Mês/Ano', ...datas.map(response => { //montar array de titulos-colunas
               return response.nomeLivro
            })]
         }
         return [`${response.data}`, ...faturamentosPorData]
      })
      
      console.log(`Array tratado`, newArrData);
      console.log("Array de colunas:", this.columnNames.slice(0, this.columnNames.length/this.qtdeColunas));

      this.data = newArrData.slice(0, newArrData.length/this.qtdeColunas);
      this.atualizar.emit('atualiza')
   }

}

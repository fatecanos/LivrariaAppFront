import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FaturamentoMensal } from 'src/app/models/interfaces/dto/graficos.interface';
import { faturamentoMock } from 'src/app/pages/admin-domain/dashboard/mock';

@Component({
  selector: 'liv-faturamento-chart',
  templateUrl: './liv-faturamento-chart.component.html',
  styleUrls: ['./liv-faturamento-chart.component.scss']
})
export class LivFaturamentoChartComponent implements OnChanges {
  @Input() faturamento: FaturamentoMensal[] = [];

  title = 'Faturamento';
  type = 'BarChart';
  data: any;
  columnNames = ['Data', 'Faturamento(R$)'];
  options = { };
  width = 800;
  height = 500;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.faturamento.length) {
      this.data = this.faturamento.map(response => {
        return [response.data, response.faturamento]
      })
    }
  }

  

}

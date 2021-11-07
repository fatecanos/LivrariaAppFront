import { Component, OnInit } from '@angular/core';
import { faturamentoMock } from 'src/app/pages/admin-domain/dashboard/mock';

@Component({
  selector: 'liv-faturamento-chart',
  templateUrl: './liv-faturamento-chart.component.html',
  styleUrls: ['./liv-faturamento-chart.component.scss']
})
export class LivFaturamentoChartComponent implements OnInit {

  title = 'Faturamento';
  type = 'BarChart';
  data = [
    ["julho/2021", 900],
    ["agosto/2021", 1000],
    ["setembro/2021", 1170],
    ["outubro/2021", 1250],
    ["novembro/2021", 1530],
    ["novembro/2021", 1530],
    ["dezembro/2021", 1530],
    ["janeiro/2022", 1530],
    ["fevereiro/2022", 1530],
    ["março/2022", 1530],
    ["abril/2022", 4530],
    ["julho/2022", 1530]
  ];
  columnNames = ['Data', 'Faturamento(R$)'];
  options = { };
  width = 800;
  height = 500;

  constructor() { }

  ngOnInit(): void {
    this.data = faturamentoMock.map(item => {
      return [item.data, item.faturamento]
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'liv-genero-chart',
  templateUrl: './liv-genero-chart.component.html',
  styleUrls: ['./liv-genero-chart.component.scss']
})
export class LivGeneroChartComponent implements OnInit {

  title = 'Popularidade por gênero';
  type = 'PieChart';
  data = [
     ['Masculino', 60.0],
     ['Feminino', 20.8]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {          
  };
  width = 550;
  height = 400;

  constructor() { }

  ngOnInit(): void {
    
  }

}

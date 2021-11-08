import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/services/vendas-service/vendas.service';

@Component({
  selector: 'liv-genero-chart',
  templateUrl: './liv-genero-chart.component.html',
  styleUrls: ['./liv-genero-chart.component.scss']
})
export class LivGeneroChartComponent implements OnInit {

  title = 'Popularidade por gênero';
  type = 'PieChart';
  data: any;
  columnNames = ['Browser', 'Percentage'];
  options = {          
  };
  width = 550;
  height = 400;

  constructor(private service: VendasService) { }

  ngOnInit(): void {
    this.service.obterPopularidadePorGenero().subscribe(response => {
      this.data = [
        ['Masculino', response.masculino],
        ['Feminino', response.feminino]
      ]
    })
  }

}

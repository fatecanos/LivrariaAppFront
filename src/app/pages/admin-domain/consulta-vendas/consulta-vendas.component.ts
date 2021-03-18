
import { Component, OnInit } from '@angular/core';
import { VendasInterface } from 'src/app/models/interfaces/venda.interface';

import { vendasMock } from 'src/backend-mock/vendas.mock';

@Component({
  selector: 'app-consulta-vendas',
  templateUrl: './consulta-vendas.component.html',
  styleUrls: ['./consulta-vendas.component.scss']
})
export class ConsultaVendasComponent implements OnInit {

  dataSource: VendasInterface[] = vendasMock;
  displayedColumns: string[] = ['numero', 'data', 'valor', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

}

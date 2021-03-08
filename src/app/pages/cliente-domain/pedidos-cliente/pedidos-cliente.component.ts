import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.scss']
})
export class PedidosClienteComponent implements OnInit {

  dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

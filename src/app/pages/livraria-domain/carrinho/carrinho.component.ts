import { Component, OnInit } from '@angular/core';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/estoque.interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  livros: LivroEstoqueInterface[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}

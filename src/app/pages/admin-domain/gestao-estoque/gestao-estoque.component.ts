import { Component, OnInit } from '@angular/core';
import { ItemEstoqueDTO } from 'src/app/models/interfaces/dto/estoque.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  selector: 'app-gestao-estoque',
  templateUrl: './gestao-estoque.component.html',
  styleUrls: ['./gestao-estoque.component.scss']
})
export class GestaoEstoqueComponent implements OnInit {

  private livrosEstoque?: ItemEstoqueDTO[];

  constructor(
    private livroService: EstoqueService
  ) { }

  ngOnInit(): void {
    this.livroService.getEstoque
  }

}

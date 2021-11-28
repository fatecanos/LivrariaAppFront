import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemEstoqueDTO } from 'src/app/models/interfaces/dto/estoque.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  selector: 'app-gestao-estoque',
  templateUrl: './gestao-estoque.component.html',
  styleUrls: ['./gestao-estoque.component.scss']
})
export class GestaoEstoqueComponent implements OnInit {

  livrosEstoque$?: Observable<LivroDTO[]>;
  livros: LivroDTO[] = []

  constructor(
    private livroService: EstoqueService,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.livrosEstoque$ = this.livroService.getEstoque();
    this.livrosEstoque$.subscribe(res => this.livros = res)

    this.livros = this.livros.sort((livroCurr, livroPrev) => {
      return livroCurr.id - livroPrev.id
    })
  }

  atualizarEstoque(livro: LivroDTO, qtde: number) {
    livro.estoque = qtde
    this.livroService.atualizarEstoque(livro).subscribe(res => {
      this.snack.open(`Estoque atualizado com sucesso!`, 'fechar')
      this.init()
    }, err => {
      this.snack.open(`falha ao atualizar estoque!`, 'fechar')
    })
  }

}

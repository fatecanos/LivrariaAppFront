import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {

  livroId: number = 0;

  livroData: LivroEstoqueInterface | any; 

  routeData$?: Observable<Params>;

  livro$?: Observable<LivroEstoqueInterface>;

  constructor(
    private snack: MatSnackBar,
    private service: EstoqueService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.routeData$ = this.activatedRoute.params;

    this.routeData$.subscribe(data => {
      this.livroId = data.id;
    });

    this.livro$ = this.service.obterDetalhesLivroPorId(this.livroId);
    this.livro$.subscribe(response => {
      this.livroData = response;
    });
  }

  addNovoItem() {
    this.livroData.qtdeSelecionada = 1;
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroEstoqueInterface[] = JSON.parse(jsonCarrinho);
    let isAlreadyExist = listaProdutos.find(livro => livro.id === this.livroData.id)

    if(!isAlreadyExist) {
      listaProdutos = [this.livroData, ...listaProdutos];
      localStorage.setItem('carrinho', JSON.stringify(listaProdutos))
    } else {
      this.snack.open("Já está incluído no carrinho", "fechar", {
        duration: 2000
      })
    }
    this.router.navigate(['/livraria/carrinho'])
  }

  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/estoque.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {

  livroId: number = 0;
  routeData$?: Observable<Params>;

  livro$?: Observable<LivroEstoqueInterface>;

  constructor(
    private service: EstoqueService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData$ = this.activatedRoute.params;

    this.routeData$.subscribe(data => {
      this.livroId = data.id;
    });

    this.livro$ = this.service.obterDetalhesLivroPorId(this.livroId);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/estoque.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  livros$?: Observable<LivroEstoqueInterface[]>;

  constructor(
    private service: EstoqueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.livros$ = this.service.getEstoque();
  }

  goToDetails(livroId: number) {
    this.router.navigate([`/livraria/detalhes/${livroId}`]);
  }

}

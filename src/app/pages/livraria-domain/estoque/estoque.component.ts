import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EstoqueInterface } from 'src/app/models/interfaces/estoque.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  livros$?: Observable<EstoqueInterface[]>;

  constructor(
    private service: EstoqueService
  ) {}

  ngOnInit(): void {
    this.livros$ = this.service.getEstoque();
  }

}

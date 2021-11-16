import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FaturamentoMensal, FaturamentoProduto } from 'src/app/models/interfaces/dto/graficos.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { VendaInterface } from 'src/app/models/interfaces/dto/venda.interface';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';
import { VendasService } from 'src/app/services/vendas-service/vendas.service';
import { livrosIniciais, rankingMock } from './mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['posicao', 'id', 'nome', 'cpf', 'quantidade'];
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  rangeDatas: FormGroup;
  produtosSelecionados: LivroDTO[] = [];

  produtos: LivroDTO[] = [];

  public faturamentoMensal?: Observable<FaturamentoMensal[]>;
  public faturamentoPorProdutos?: Observable<FaturamentoProduto[]>;

  constructor(
    private livrosService: EstoqueService,
    private vendasService: VendasService) {    
    this.rangeDatas = new FormGroup({  
      start: new FormControl(new Date(new Date().getFullYear()-1, 9, 1), Validators.required),
      end: new FormControl(new Date(), Validators.required),
    });
  }

  ngOnInit(): void {
    this.produtosSelecionados = livrosIniciais
    this.livrosService.getEstoque().subscribe(res => this.produtos = res)
    this.buscarFaturamento();
    this.buscarRanking()
  }

  buscarRanking() {
    this.vendasService.obterRankClientes().subscribe(res => {
      let aux = res.sort((a, b)=> {return b.comprasRealizadas - a.comprasRealizadas })
      this.dataSource = new MatTableDataSource<any>(aux)
      this.dataSource.paginator = this.paginator || null;
    })

    
  }

  buscarFaturamento() {
    let inicio, fim;

    console.log(`produtos selecionados:`, this.produtosSelecionados);
    
    
    if(this.rangeDatas.valid) {
      inicio = this.rangeDatas.get('start')?.value;
      fim = this.rangeDatas.get('end')?.value;

      console.log('produtos selecionados', JSON.stringify(this.produtosSelecionados));

      const PAYLOAD = this.produtosSelecionados.map(data => {
        return {
          idLivro: data.id,
          dataInicio: this.rangeDatas.get('start')?.value,
          dataFim: this.rangeDatas.get('end')?.value
        }
      })

      
      let headers = new HttpHeaders({ "livroFaturamentoParamDTO": JSON.stringify(PAYLOAD) })

      this.faturamentoPorProdutos = this.vendasService.obterFaturamentoPorProdutos(headers);
      this.faturamentoMensal = this.vendasService.obterFaturamento(inicio, fim);
    }
  }

}

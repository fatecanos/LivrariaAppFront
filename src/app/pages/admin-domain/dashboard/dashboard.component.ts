import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FaturamentoMensal } from 'src/app/models/interfaces/dto/graficos.interface';
import { VendasService } from 'src/app/services/vendas-service/vendas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rangeDatas: FormGroup;

  constructor(private vendasService: VendasService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.rangeDatas = new FormGroup({
      start: new FormControl(new Date(new Date().getFullYear()-1, 1, 1), Validators.required),
      end: new FormControl(new Date(), Validators.required),
    });
  }


  ngOnInit(): void {
    this.buscarFaturamento();
  }

  public faturamentoMensal?: Observable<FaturamentoMensal[]>;

  buscarFaturamento() {
    let inicio, fim;
    
    if(this.rangeDatas.valid) {
      inicio = this.rangeDatas.get('start')?.value;
      fim = this.rangeDatas.get('end')?.value;
 
      this.faturamentoMensal = this.vendasService.obterFaturamento(inicio, fim);
    }
  }

}

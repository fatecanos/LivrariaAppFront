import { Component, OnInit } from '@angular/core';
import { CupomDTO } from 'src/app/models/interfaces/dto/cupom.interface';
import { CupomPedidoInterface } from 'src/app/models/interfaces/dto/pedido-carrinho.interface';
import { CupomService } from 'src/app/services/cupons-service/cupom.service';

@Component({
  selector: 'app-meus-cupons',
  templateUrl: './meus-cupons.component.html',
  styleUrls: ['./meus-cupons.component.scss']
})
export class MeusCuponsComponent implements OnInit {

  cuponsPromocionais: CupomDTO[] = [];

  constructor(private cuponsService: CupomService) { }

  ngOnInit(): void {
    this.cuponsService.obterTodosCuponsPromocionais()
      .subscribe(response => {
        this.cuponsPromocionais = response
      });
  }

  copiarCupom(codigo: string) {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CupomDTO, TipoCupomEnum } from 'src/app/models/interfaces/dto/cupom.interface';
import { CupomPedidoInterface } from 'src/app/models/interfaces/dto/pedido-carrinho.interface';
import { CupomService } from 'src/app/services/cupons-service/cupom.service';

@Component({
  selector: 'app-meus-cupons',
  templateUrl: './meus-cupons.component.html',
  styleUrls: ['./meus-cupons.component.scss']
})
export class MeusCuponsComponent implements OnInit {

  cuponsPromocionais: CupomDTO[] = [];
  cuponsTroca: CupomDTO[] = []

  constructor(private cuponsService: CupomService) { }

  ngOnInit(): void {
    this.cuponsService.obterTodosCuponsPromocionais()
      .subscribe(response => {
        this.cuponsPromocionais = response
      });
    this.cuponsService.obterCuponsCliente().subscribe((response) => {
      this.cuponsTroca = response.filter(
        (cupom) => cupom.tipoCupom == TipoCupomEnum.TROCA
      );
    });
  }

  copiarCupom(codigo: string) {
    
  }

}

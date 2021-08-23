import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { BandeiraCartaoDTO, CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { bandeirasMock } from 'src/app/models/mocks/bandeiras-cartao.mock';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes-service.service';

@Component({
  selector: 'liv-cartoes-form',
  templateUrl: './liv-cartoes-form.component.html',
  styleUrls: ['./liv-cartoes-form.component.scss']
})
export class LivCartoesFormComponent implements OnInit {

  bandeirasCartao: BandeiraCartaoDTO[] = bandeirasMock;
  isNovoCartaoForm: boolean = false;
  
  idCartaoSelecionado: number = 0;

  cartoes$?: Observable<CartaoClienteDTO[]>;

  constructor(
    private snackService: MatSnackBar,
    private service: CartoesService) { }

  ngOnInit(): void {
    this.cartoes$ = this.service.getCartoes();

    this.cartoes$.subscribe(response => {
      let cartaoPreferencial = response.find(cartao => {
        return cartao.isPrincipal;
      })

      this.idCartaoSelecionado = cartaoPreferencial?.id  || 0;
    })
  }

  

}

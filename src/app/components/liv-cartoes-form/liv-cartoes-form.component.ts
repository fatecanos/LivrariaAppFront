import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CartaoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { BandeiraCartaoDTO, CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { bandeirasMock } from 'src/app/models/mocks/bandeiras-cartao.mock';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';
import { InativarCartaoDialogComponent } from '../dialogs/inativar-cartao-dialog/inativar-cartao-dialog.component';

@Component({
  selector: 'liv-cartoes-form',
  templateUrl: './liv-cartoes-form.component.html',
  styleUrls: ['./liv-cartoes-form.component.scss']
})
export class LivCartoesFormComponent implements OnInit {

  bandeirasCartao: BandeiraCartaoDTO[] = bandeirasMock;

  novoCartaoForm: FormGroup = new FormGroup({});
  isNovoCartaoForm: boolean = false;
  
  idCartaoSelecionado?: number;

  cartoes$?: Observable<CartaoClienteDTO[]>;

  constructor(
    public dialog: MatDialog,
    private snackService: MatSnackBar,
    private service: CartoesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartoes$ = this.service.getCartoes();

    this.cartoes$.subscribe(response => {
      let cartaoPreferencial = response.find(cartao => {
        return cartao.isPrincipal;
      })

      this.idCartaoSelecionado = cartaoPreferencial?.id;
    })

    this.novoCartaoForm = this.formBuilder.group({
      id: [''],
      numero: ['', { validators: [Validators.required] }],
      nome: ['', { validators: [Validators.required] }],
      bandeira: ['', { validators: [Validators.required] }],
      codigoSeguranca: ['', { validators: [Validators.required]}],
      isPrincipal: [false, { validators: [Validators.required] }]
    })
  }

  enviarNovoCartao() {
    if(this.novoCartaoForm.valid) {
      let cartao: CartaoDTO = this.novoCartaoForm.value;
      console.log("novo-cartao:", cartao);
      
      //salvar cartao
    }
  }

  inativarCartao(cartao: CartaoClienteDTO) {
    console.log("Cartao clicado:", cartao);
    const dialogRef = this.dialog.open(InativarCartaoDialogComponent, {
      width: '250px',
      data: {
        cartao: cartao
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.cartoes$ = this.service.getCartoes();
      this.cartoes$.subscribe(response => {
        let cartaoPreferencial = response.find(cartao => {
          return cartao.isPrincipal;
        })
  
        this.idCartaoSelecionado = cartaoPreferencial?.id;
      })
    });
  }
}

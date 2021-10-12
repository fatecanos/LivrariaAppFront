import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CartaoCreditoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { BandeiraCartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { bandeirasMock } from 'src/app/models/mocks/bandeiras-cartao.mock';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';
import { InativarCartaoDialogComponent } from '../dialogs/inativar-cartao-dialog/inativar-cartao-dialog.component';

@Component({
  selector: 'liv-cartoes-form',
  templateUrl: './liv-cartoes-form.component.html',
  styleUrls: ['./liv-cartoes-form.component.scss']
})
export class LivCartoesFormComponent implements OnInit {

  bandeirasCartao: BandeiraCartaoClienteDTO[] = bandeirasMock;

  novoCartaoForm: FormGroup = new FormGroup({});
  isNovoCartaoForm: boolean = false;

  idCartaoSelecionado?: number;

  cartoes$?: Observable<CartaoCreditoDTO[]>;

  constructor(
    public dialog: MatDialog,
    private snackService: MatSnackBar,
    private service: CartoesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.init();

    this.novoCartaoForm = this.formBuilder.group({
      id: [''],
      numero: ['', { validators: [Validators.required] }],
      nome: ['', { validators: [Validators.required] }],
      bandeira: ['', { validators: [Validators.required] }],
      codigoSeguranca: ['', { validators: [Validators.required]}],
      isPreferencial: [false, { validators: [Validators.required] }]
    })
  }

  init() {
    this.cartoes$ = this.service.getCartoes();

    this.cartoes$.subscribe(response => {
      let cartaoPreferencial = response.find(cartao => {
        return cartao.isPreferencial;
      })

      this.idCartaoSelecionado = cartaoPreferencial?.id;
    })
  }

  enviarNovoCartao() {
    if(this.novoCartaoForm.valid) {
      let cartao: CartaoCreditoDTO = this.novoCartaoForm.value;
      console.log("novo-cartao:", cartao);

      //salvar cartao
      // this.service.gravar(cartao).subscribe(response => {
      //   this.snackService.open('cartão gravado com sucesso', 'fechar', { duration: 3000 })
      //   this.isNovoCartaoForm = false;
      // }, err => {
      //   this.snackService.open('falha ao gravar cartão', 'fechar', { duration: 3000 })
      // }, () => {
      //   this.init();
      // })
    }
  }

  inativarCartao(cartao: CartaoCreditoDTO) {
    console.log("Cartao clicado:", cartao);
    const dialogRef = this.dialog.open(InativarCartaoDialogComponent, {
      width: '250px',
      data: cartao
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.cartoes$ = this.service.getCartoes();
      this.cartoes$.subscribe(response => {
        let cartaoPreferencial = response.find(cartao => {
          return cartao.isPreferencial;
        })

        this.idCartaoSelecionado = cartaoPreferencial?.id;
      })
    });
  }
}

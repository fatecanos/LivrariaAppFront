import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EnderecoSubmitterComponent } from 'src/app/components/dialogs/endereco-submitter/endereco-submitter.component';
import { InativarClienteDialogComponent } from 'src/app/components/dialogs/inativar-cliente-dialog/inativar-cliente-dialog.component';
import { ClienteDTO, EnderecoDTO, EstadoDTO } from 'src/app/models/interfaces/dto/client.interface';
import { UFs } from 'src/app/models/mocks/ufs.mock';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

function matchValidator(controlName: string): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(controlName)?.value === control?.value ? null : { mismatch: true };
  };
}

@Component({
  templateUrl: './atualizar-clientes.component.html',
  styleUrls: ['./atualizar-clientes.component.scss']
})
export class AtualizarClientesComponent implements OnInit {

  isLoading: boolean = false;
  estados: Array<EstadoDTO> = UFs;

  formDadosCliente?: FormGroup = new FormGroup({});
  formEmail?: FormGroup;
  formSenha?: FormGroup;

  dadosCliente?: ClienteDTO | any;
  enderecosCliente: EnderecoDTO[] = [];

  clienteResponse$?: Observable<ClienteDTO>;
  CLIENTE_ID: number = 1;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteResponse$ = this.clienteService.getClientById(this.CLIENTE_ID);
    
    //TODO: integrar busca do cliente a partir da sessao de usuario
    this.clienteResponse$.subscribe(response => {
      this.formDadosCliente = this.formBuilder.group({
        id: [this.CLIENTE_ID],
        nome: [response.nome, {validators: [Validators.required]} ],
        sobrenome: [response.sobrenome, {validators: [Validators.required]} ],
        dataNascimento: [response.dataNascimento, {validators: [Validators.required]} ],
        cpf: [response.cpf, 
          { validators: [
              Validators.required,
              Validators.minLength(11),
              Validators.maxLength(11),
            ]
          }
        ]
      });
    });

    this.initForms();
  }

  initForms() {
    this.formEmail = this.formBuilder.group({
      email: [this.dadosCliente?.email, {validators: [Validators.required, Validators.email]}],
      confirmacaoEmail: ['', {validators: [Validators.required, matchValidator('email')]}],
    })

    this.formSenha = this.formBuilder.group({
      senha: this.formBuilder
      .control('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]
      }),
      confirmacaoSenha: this.formBuilder
      .control('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12),
          matchValidator('senha')
        ]
      }),
    })
  }

  enviarDadosCliente() {
    this.isLoading = true;
    let cliente: ClienteDTO;

    if(this.formDadosCliente?.valid) {
      cliente = this.formDadosCliente.value;
      console.log(cliente);
      
      this.clienteService.updateClientById(cliente.id, cliente)
        .subscribe(response => {
          this.isLoading = false;
          this._snackBar.open(response.description || 'sucesso', 'fechar', {duration: 5000});
        }, error => {
          this.isLoading = false;
          this._snackBar.open("erro ao atualizar cliente", 'fechar', {duration: 5000});
        }, ()=> {
          this.atualizarEstado();
          this.isLoading = false;
        });
    }

    this.isLoading = false;
  }

  atualizarEmail() {
    this.isLoading = true;

    if(this.formEmail?.valid) {
      this.dadosCliente.email = this.formEmail.get('email')?.value;

      this.clienteService.updateClientById(this.dadosCliente?.id, this.dadosCliente)
        .subscribe(response => {
          this.isLoading = false;
          this._snackBar.open("email do cliente foi atualizado", 'fechar', {duration: 5000});
        }, error=> {
          this.isLoading = false;
          this._snackBar.open("erro ao atualizar", 'fechar', {duration: 5000});
        }, ()=> {
          this.atualizarEstado();
          this.isLoading = false;
        });
    } 
  }

  atualizarSenha() {
    if(this.formSenha?.valid) {
      console.log('atualizando senha...')
    }
  }

  atualizarEstado() {
    this.clienteResponse$ = this.clienteService.getClientById(this.CLIENTE_ID);
    this.clienteResponse$.subscribe(response => { this.dadosCliente = response });
  }

  abrirModalNovoEndereco() {
    const dialogRef = this.dialog.open(EnderecoSubmitterComponent, {
      width: '700px',
      data: 'ola'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.clienteResponse$ = this.clienteService.getClientById(1);
    })
  }

  inativarClientePorId() {
    const dialogRef = this.dialog.open(InativarClienteDialogComponent, {
      width: '250px',
      data: {
        idCliente: this.formDadosCliente?.get('id')?.value
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    });
  }

  atualizarEnderecos(event: any) {
    console.log("obteve evento");
    this.clienteResponse$ = this.clienteService.getClientById(1);
  }

}

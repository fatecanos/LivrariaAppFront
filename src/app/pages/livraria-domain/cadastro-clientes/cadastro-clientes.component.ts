import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { TipoEndereco } from 'src/app/models/enum/tipo-endereco.enum';
import { EstadoDTO, TipoLogradouroDTO } from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from 'src/app/models/mocks/ufs.mock';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: AbstractControl) => {
    console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password)?.value === control?.value ? null : { mismatch: true };
  };
}

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent {

  formularioCliente: FormGroup = new FormGroup({});
  
  isLoading: boolean = false;
  isSuccess = false;
  showMessage: boolean = false;

  message: string = '';
  title: string = '';

  estados: EstadoDTO[] = UFs;
  tipoLogradouros: Array<string> = tiposLogradourosMock;

  currentStep: number = 0;

  constructor(
    private clientService: ClienteService,
    private formBuilder: FormBuilder) {
    this.initForm();
  }

  submitCustomer() {
      this.isLoading = true;

      if(this.formularioCliente.valid) {
        this.clientService.saveClient(this.formularioCliente.value)
          .subscribe(response => {
            this.title = response.title
            this.message = response.description;
            this.isSuccess = true;
          }, (error)=> {
            console.log(error);
          }, ()=> {
            this.showMessage = true;
            this.isLoading = false
          });
      } else {
        this.isLoading = false;
      }
  }


  initForm(): void {
    this.formularioCliente = this.formBuilder.group({
      nome: ['', {validators: [Validators.required]}],
      sobrenome: ['', {validators: [Validators.required]}],
      dataNascimento: ['', {validators: [Validators.required]}],
      genero: ['', { validators: [Validators.required]}],

      cpf: this.formBuilder.control('', {
        validators: [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]
      }),

      telefone: ['', { validators: [Validators.required]} ],

      email: ['', {validators: [Validators.required, Validators.email]}],

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
            passwordMatchValidator('senha')
          ]
      }),
      enderecos: this.formBuilder.array([
        {
          logradouro: ['', Validators.required],
          bairro: ['', Validators.required],
          numero: ['', Validators.required],
          cep: ['', Validators.required],
          complemento: ['', Validators.required],
          nome: ['', Validators.required],
          pais: ['', Validators.required],
          tipoLogradouro: ['', Validators.required],
          cidade: this.formBuilder.group({
            id: [''],
            descricao: ['', Validators.required],
            estado: this.formBuilder.group({
              id: ['', Validators.required]
            })
          }),
          tipoEndereco: this.formBuilder.group({
            id: [''],
            descricao: ['', Validators.required]
          })
        },
        {
          logradouro: ['', Validators.required],
          bairro: ['', Validators.required],
          numero: ['', Validators.required],
          cep: ['', Validators.required],
          complemento: ['', Validators.required],
          nome: ['', Validators.required],
          pais: ['', Validators.required],
          tipoLogradouro: ['', Validators.required],
          cidade: this.formBuilder.group({
            id: [''],
            descricao: ['', Validators.required],
            estado: this.formBuilder.group({
              id: ['', Validators.required]
            })
          }),
          tipoEndereco: this.formBuilder.group({
            id: [''],
            descricao: ['', Validators.required]
          })
        }
      ])
    });


  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  ClienteDTO,
  TelefoneDTO,
} from 'src/app/models/interfaces/dto/client.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { TelefoneService } from 'src/app/services/telefone-service/telefone.service';
import { InativarTelefoneDialogComponent } from '../dialogs/inativar-telefone-dialog/inativar-telefone-dialog.component';

@Component({
  selector: 'liv-telefones-management',
  templateUrl: './liv-telefones-management.component.html',
  styleUrls: ['./liv-telefones-management.component.scss'],
})
export class LivTelefonesManagementComponent implements OnInit {
  telefones: TelefoneDTO[] = [];
  telefonesArrayForm?: FormArray = new FormArray([]);
  novoTelefoneForm?: FormGroup;

  hasSendNew: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private telefoneService: TelefoneService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.clienteService.getClientById().subscribe((response) => {
      this.telefones = response.telefones;

      this.telefonesArrayForm = this.formBuilder.array(
        response.telefones.map((telefone) => {
          return this.formBuilder.group({
            id: [telefone.id],
            telefone: [
              telefone.telefone,
              { validators: [Validators.required] },
            ],
          });
        })
      );
    });
  }

  initForm() {
    this.hasSendNew = true;
    this.novoTelefoneForm = this.formBuilder.group({
      id: [''],
      telefone: ['', { validators: [Validators.required] }],
    });
  }

  clearForm() {
    this.hasSendNew = false;
    this.novoTelefoneForm?.patchValue({
      telefone: '',
    });
  }

  alterarTelefone(telefoneForm: FormGroup) {
    console.log(telefoneForm.controls['id'].value);
    console.log(telefoneForm.controls['telefone'].value);

    let telefone: TelefoneDTO;
    telefone = telefoneForm.value;

    this.telefoneService.atualizarTelefone(telefone).subscribe(
      (response) => {
        console.log(`Response: ${response}`);

        this._snackBar.open('O telefone foi alterado com sucesso!', 'Fechar', {
          duration: 5000,
        });
      },
      (error) => {
        this._snackBar.open(
          'Erro ao alterar o telefone do cliente. Tente novamente!',
          'Fechar',
          {
            duration: 5000,
          }
        );
      }
    );
  }

  inativarTelefone(telefoneForm: FormGroup) {
    console.log(telefoneForm.controls['telefone'].value);
    let telefone: TelefoneDTO;
    telefone = telefoneForm.value;

    const dialogRef = this.dialog.open(InativarTelefoneDialogComponent, {
      width: '250px',
      data: telefone,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/clientes']);
    });
  }
}

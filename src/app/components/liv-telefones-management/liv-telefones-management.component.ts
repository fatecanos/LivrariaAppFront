import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteDTO, TelefoneDTO } from 'src/app/models/interfaces/dto/client.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { InativarTelefoneDialogComponent } from '../dialogs/inativar-telefone-dialog/inativar-telefone-dialog.component';

@Component({
  selector: 'liv-telefones-management',
  templateUrl: './liv-telefones-management.component.html',
  styleUrls: ['./liv-telefones-management.component.scss']
})
export class LivTelefonesManagementComponent implements OnInit {

  telefones: TelefoneDTO[] = [];
  telefonesArrayForm?: FormArray = new FormArray([]);
  novoTelefoneForm?: FormGroup;

  hasSendNew: boolean = false;

  constructor(
    private service: ClienteService, 
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) 
  { 
    
  }

  ngOnInit(): void {
    this.service.getClientById(1)
      .subscribe(response => {
        this.telefones = response.telefones;
        
        this.telefonesArrayForm = this.formBuilder.array(response.telefones.map(telefone => {
          return this.formBuilder.group({ 
            id: [telefone.id],
            telefone: [telefone.telefone, {validators: [Validators.required]}]
          })
        }))
      })
  }

  initForm() {
    this.hasSendNew = true;
    this.novoTelefoneForm = this.formBuilder.group({
      id: [''],
      telefone: ['', {validators: [Validators.required]}]
    })
  }

  clearForm() {
    this.hasSendNew = false;
    this.novoTelefoneForm?.patchValue({
      telefone: ''
    });
  }

  inativarTelefone(telefone: FormGroup) {
    console.log(telefone);
    
    const dialogRef = this.dialog.open(InativarTelefoneDialogComponent, {
      width: '250px',
      data: {
        idCliente: Number(sessionStorage.getItem('isLogado')),
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/clientes']);
    });
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TelefoneDTO } from 'src/app/models/interfaces/dto/client.interface';
import { TelefoneService } from 'src/app/services/telefone-service/telefone.service';

@Component({
  selector: 'modal-inativar-telefone-dialog',
  templateUrl: './inativar-telefone-dialog.component.html',
  styleUrls: ['./inativar-telefone-dialog.component.scss']
})
export class InativarTelefoneDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TelefoneDTO>,
    @Inject(MAT_DIALOG_DATA) public data: TelefoneDTO,
    private service: TelefoneService
  ) { }

  ngOnInit(): void {
  }

  inativarTelefone() {

  }

  fecharModal() {

  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'inativar-endereco-dialog',
  templateUrl: './inativar-endereco-dialog.component.html',
  styleUrls: ['./inativar-endereco-dialog.component.scss']
})
export class InativarEnderecoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

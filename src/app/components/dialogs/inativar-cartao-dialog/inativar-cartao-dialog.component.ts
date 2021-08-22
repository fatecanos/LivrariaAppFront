import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'inativar-cartao-dialog',
  templateUrl: './inativar-cartao-dialog.component.html',
  styleUrls: ['./inativar-cartao-dialog.component.scss']
})
export class InativarCartaoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }
  
  inativarCartao() {
    console.log("inativando cartao:", this.data.cartao);
  }
}

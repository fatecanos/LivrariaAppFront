import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InativateDialogInterface } from 'src/app/models/interfaces/dialog-data.interface';

@Component({
  selector: 'app-inativar-dialog',
  templateUrl: './inativar-dialog.component.html',
  styleUrls: ['./inativar-dialog.component.scss']
})
export class InativarDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InativarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InativateDialogInterface
  ) { }

  ngOnInit(): void {
    
  }
}

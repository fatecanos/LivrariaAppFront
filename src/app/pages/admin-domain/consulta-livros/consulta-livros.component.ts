import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DetalhesLivroComponent } from 'src/app/components/dialogs/detalhes-livro/detalhes-livro.component';
import { InativarLivroDialogComponent } from 'src/app/components/dialogs/inativar-livro-dialog/inativar-livro-dialog.component';
import { DataDialogInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { LivroService } from 'src/app/services/livro-service/livro-service.service';

@Component({
  templateUrl: './consulta-livros.component.html',
  styleUrls: ['./consulta-livros.component.scss']
})
export class ConsultaLivrosComponent implements OnInit {

  disableSelect = new FormControl(false);

  dataSource: LivroDTO[] = [];
  displayedColumns: string[] = ['titulo', 'isbn', 'editora', 'ano' ];

  livros$?: Observable<LivroDTO[]>;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private livroService: LivroService
  ) { }

  ngOnInit(): void {
    this.initContent();
  }

  initContent() {
    this.livros$ = this.livroService.obterTodosLivros();

    this.livros$.subscribe(response => {
      this.dataSource = response;
    })
  }


  inativarLivroPorId(id: number) {
    const dialogRef = this.dialog.open(InativarLivroDialogComponent, {
      width: '250px',
      data: {
        livroId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.initContent();
    })
  }

  abrirModalDetalhes(id: number) {
    const data: DataDialogInterface = {
      id: id
    }
    
    const dialogRef = this.dialog.open(DetalhesLivroComponent, {
      width: '1200px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.initContent();
    })
  }

}

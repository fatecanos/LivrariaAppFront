import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CupomDTO } from 'src/app/models/interfaces/dto/cupom.interface';
import { CupomService } from 'src/app/services/cupons-service/cupom.service';

// const ELEMENT_DATA: any[] = [
//   { id: 1, codigo: '2334', nome: 'Ofertas Março', valor: 30.0 },
//   { id: 2, codigo: '2333', nome: 'Ofertas dia dos Pais', valor: 50.0 },
//   { id: 3, codigo: '2389', nome: 'Ofertas Familia', valor: 9.0 },
//   { id: 4, codigo: '2309', nome: 'Ofertas Bons Livros', valor: 5.0 },
// ];

@Component({
  selector: 'liv-gestao-cupons',
  templateUrl: './gestao-cupons.component.html',
  styleUrls: ['./gestao-cupons.component.scss'],
})
export class GestaoCuponsComponent implements OnInit {
  isNovoCupomForm: boolean = false;
  cupomForm: FormGroup = new FormGroup({});

  displayedColumns: string[] = ['id', 'codigo', 'nome', 'valor', 'opcoes'];
  dataSource: CupomDTO[] = [];

  cupons$?: Observable<CupomDTO[]>;

  constructor(
    private formBuilder: FormBuilder,
    private service: CupomService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cupons$ = this.service.obterTodosCuponsPromocionais();

    this.cupons$.subscribe((response) => {
      this.dataSource = response;
    });
    this.cupomForm = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: [0, Validators.required],
      tipoCupom: 0,
    });
  }

  salvarNovoCupom() {
    let payload = this.cupomForm?.value;
    console.log(payload);

    this.service.save(payload).subscribe(
      (res) => {
        this._snackBar.open(`Novo cupom cadastrado com sucesso`, 'fechar');
      },
      (err) => {
        this._snackBar.open(err.error.description, 'fechar');
      },
      () => {
        this.ngOnInit();
      }
    );
  }
}

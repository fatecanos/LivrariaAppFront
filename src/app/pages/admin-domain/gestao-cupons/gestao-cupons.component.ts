import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const ELEMENT_DATA: any[] = [
  {id: 1, codigo: '2334', nome: 'Ofertas Março', valor: 30.00 },
  {id: 2, codigo: '2333', nome: 'Ofertas dia dos Pais', valor: 50.00 },
  {id: 3, codigo: '2389', nome: 'Ofertas Familia', valor: 9.00 },
  {id: 4, codigo: '2309', nome: 'Ofertas Bons Livros', valor: 5.00 }
];

@Component({
  selector: 'liv-gestao-cupons',
  templateUrl: './gestao-cupons.component.html',
  styleUrls: ['./gestao-cupons.component.scss']
})
export class GestaoCuponsComponent implements OnInit {

  isNovoCupomForm: boolean = false;
  cupomForm: FormGroup = new FormGroup({});

  displayedColumns: string[] = ['id', 'codigo', 'nome', 'valor', 'opcoes'];
  dataSource = ELEMENT_DATA;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cupomForm = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: [0, Validators.required]
    })
  }

}

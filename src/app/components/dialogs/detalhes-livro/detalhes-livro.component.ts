import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DataDialogInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { CategoriaInterface, GrupoPrecificacaoInterface } from 'src/app/models/interfaces/dto/utils-livro-form.interface';
import { LivroService } from 'src/app/services/livro-service/livro-service.service';
import { UtilsLivroFormService } from 'src/app/services/utils-livro-service/utils-livro-form.service';

@Component({
  templateUrl: './detalhes-livro.component.html',
  styleUrls: ['./detalhes-livro.component.scss']
})
export class DetalhesLivroComponent implements OnInit {

  categorias$?: Observable<CategoriaInterface[]>;
  gruposPrecificacao$?: Observable<GrupoPrecificacaoInterface[]>;

  categoriasSelecionadas: CategoriaInterface[] = [];

  livro$?: Observable<LivroDTO>;
  formularioLivro?: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DataDialogInterface>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialogInterface,
    private service: LivroService,
    private formBuilder: FormBuilder,
    private utils: UtilsLivroFormService
  ) { }

  ngOnInit(): void {
    //just mock
    this.categorias$ = this.utils.obterCategorias();
    this.gruposPrecificacao$ = this.utils.obterGruposPrecificacao();
    this.livro$ = this.service.obterLivroPorId(this.data.id);
    this.initForm();
  }

  initForm() {
    this.formularioLivro = this.formBuilder.group({
      autor: ['', [Validators.required]], //ok
      categorias: this.formBuilder.array([], Validators.required), //ok
      ano: ['', [Validators.required]], //ok
      titulo: ['', [Validators.required]], // ok
      editora: ['', [Validators.required]], // ok
      edicao: ['', [Validators.required]],//ok
      isbn: ['', [Validators.required]],//ok
      quantidadePaginas: ['', [Validators.required]], //ok
      sinopse: ['', [Validators.required]], //ok
      dimensoes: this.formBuilder.group({ //ok
        altura: ['', [Validators.required]], 
        largura: ['', [Validators.required]],
        peso: ['', [Validators.required]],
        profundidade: ['', [Validators.required]]
      }),
      grupoPrecificacao: ['', [Validators.required]], //ok
      codigoBarras: ['', [Validators.required]], // ok
      url: ['', [Validators.required]]
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import {
  CategoriaInterface,
  GrupoPrecificacaoInterface,
} from 'src/app/models/interfaces/dto/utils-livro-form.interface';
import { UtilsLivroFormService } from 'src/app/services/utils-livro-service/utils-livro-form.service';

@Component({
  templateUrl: './novo-livro.component.html',
  styleUrls: ['./novo-livro.component.scss'],
})
export class NovoLivroComponent implements OnInit {
  formularioLivro?: FormGroup;
  categorias$?: Observable<CategoriaInterface[]>;
  gruposPrecificacao$?: Observable<GrupoPrecificacaoInterface[]>;

  categoriasSelecionadas: CategoriaInterface[] = [];

  livroDto?: LivroDTO;

  constructor(
    private snack: MatSnackBar,
    private service: UtilsLivroFormService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.categorias$ = this.service.obterCategorias();
    this.gruposPrecificacao$ = this.service.obterGruposPrecificacao();
  }

  initForm() {
    this.formularioLivro = this.formBuilder.group({
      autor: ['', [Validators.required]],
      categorias: this.formBuilder.array([], Validators.required),
      ano: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      editora: ['', [Validators.required]],
      edicao: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      quantidadePaginas: ['', [Validators.required]],
      sinopse: ['', [Validators.required]],
      dimensoes: this.formBuilder.group({
        altura: [null, [Validators.required]],
        largura: [null, [Validators.required]],
        peso: [null, [Validators.required]],
        profundidade: [null, [Validators.required]],
      }),
      // grupoPrecificacao: this.formBuilder.array([], Validators.required),
      grupoPrecificacao: ['', [Validators.required]],
      codigoBarras: ['', [Validators.required]],
      url: ['', [Validators.required]],
      estoque: ['', [Validators.required]],
    });
  }

  atualizarCategorias(categorias: CategoriaInterface[]) {
    const categoriasFG = categorias.map((cat) => this.formBuilder.group(cat));
    const categoriasFormArray = this.formBuilder.array(categoriasFG);
    this.formularioLivro?.setControl('categorias', categoriasFormArray);

    console.log(this.formularioLivro?.get('categorias'));
  }

  enviarLivro() {
    if (this.formularioLivro?.valid) {
      this.livroDto = this.formularioLivro.value;

      console.log(this.livroDto);

      this.service.salvarNovoLivro(this.formularioLivro.value).subscribe(
        (response) => {
          this.snackBar.open(`Livro cadastrado com sucesso`, `fechar`, {
            duration: 3000,
          });
        },
        (error) => {
          this.snackBar.open(error.error.description, `fechar`, {
            duration: 3000,
          });
          console.log(`Erro ao cadastrar:`, error);
        },
        () => {}
      );

    } else {
      this.snack.open(
        'Verifique se formulario foi preenchido corretamente',
        'fechar',
        {
          duration: 2000,
        }
      );
    }
  }
}

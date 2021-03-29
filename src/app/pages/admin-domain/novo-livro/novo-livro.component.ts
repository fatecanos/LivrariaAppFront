import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { NovoLivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { CategoriaInterface, GrupoPrecificacaoInterface } from 'src/app/models/interfaces/utils-livro-form.interface';
import { UtilsLivroFormService } from 'src/app/services/utils-livro-service/utils-livro-form.service';

@Component({
  templateUrl: './novo-livro.component.html',
  styleUrls: ['./novo-livro.component.scss']
})
export class NovoLivroComponent implements OnInit {

  formularioLivro?: FormGroup;
  categorias$?: Observable<CategoriaInterface[]>;
  gruposPrecificacao$?: Observable<GrupoPrecificacaoInterface[]>;

  categoriasSelecionadas: CategoriaInterface[] = [];

  livroDto?: NovoLivroDTO;

  constructor(
    private snack: MatSnackBar,
    private utils: UtilsLivroFormService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

    this.categorias$ = this.utils.obterCategorias();
    this.gruposPrecificacao$ = this.utils.obterGruposPrecificacao();
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

  atualizarCategorias(categorias: CategoriaInterface[]) {
    const categoriasFG = categorias.map(cat => this.formBuilder.group(cat));
    const categoriasFormArray = this.formBuilder.array(categoriasFG);
    this.formularioLivro?.setControl('categorias', categoriasFormArray);


    console.log(this.formularioLivro?.get('categorias'));
  }

  enviarLivro() {
    if(this.formularioLivro?.valid) {
      this.livroDto = this.formularioLivro.value;

      console.log(this.livroDto);
      
      setTimeout(()=> {
        this.snack.open('Livro foi enviado com sucesso', 'fechar', {
          duration: 2000
        })
      })
    } else {
      this.snack.open('Verifique se formulario foi preenchido corretamente', 'fechar', {
        duration: 2000
      })
    }
  }
}

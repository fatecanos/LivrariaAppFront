import { CategoriaInterface } from "./utils-livro-form.interface";

export interface LivroDTO {
    id?: number,
    autor: string,
    categorias: CategoriaInterface[],
    ano: string
    titulo: string
    editora: string
    edicao: string
    isbn: string
    quantidadePaginas: string
    sinopse: string
    dimensoes: DimensoesDTO,
    grupoPrecificacaoId: number,
    codigoBarras: string,
    url: string,
    isAtivo?: boolean
}

export interface DimensoesDTO {
    altura: string, 
    largura: string,
    peso: string,
    profundidade: string
}
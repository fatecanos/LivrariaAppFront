import { LivroDTO } from "./livro-dto.interface";

export interface LivroEstoqueInterface {
    id: number,
    nomeLivro: string,
    autor: string,
    ano: string,
    valorUnitario: number,
    valorTotal: number,
    url: string,
    sinopse: string,
    dimensoes: DimensaoInterface,
    qtdeMaxima: number,
    qtdeComprada: number
}

export interface DimensaoInterface {
    largura: number,
    altura: number,
    profundidade: number
}

export interface ItemEstoqueDTO {
    id: number,
    livro: LivroDTO,
    quantidade: number,
    custoCompra: number,
}

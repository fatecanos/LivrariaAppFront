import { LivroDTO } from "./livro-dto.interface";

export interface ItemCarrinhoInterface {
    produto: LivroDTO,
    quantidade: number,
}

// export interface LivroInterface {
//     id?: number,
//     nome: string,
//     url: string,
//     valor: number,
//     qtdeMaxima: number
// }

export interface CarrinhoStoreInterface {
    itens: LivroDTO[]
}
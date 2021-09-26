import { LivroDTO } from "./livro-dto.interface";

export interface ItemCarrinhoInterface {
    produto: LivroDTO,
    quantidade: number,
}
export interface CarrinhoStoreInterface {
    itens: LivroDTO[]
}
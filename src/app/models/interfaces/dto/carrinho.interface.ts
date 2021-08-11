export interface ItemCarrinhoInterface {
    id: number,
    produto: LivroInterface,
    quantidade: number,
}

export interface LivroInterface {
    id?: number,
    nome: string,
    url: string,
    valor: number,
    qtdeMaxima: number
}

export interface CarrinhoStoreInterface {
    itens: LivroInterface[]
}
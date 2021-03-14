export interface ItemCarrinhoInterface {
    id: number,
    produto: LivroInterface,
    quantidade: number,
    quantidadeMaxima: number
}

export interface LivroInterface {
    id?: number,
    nome: string,
    url: string,
    valor: number
}
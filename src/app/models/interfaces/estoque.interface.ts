export interface LivroEstoqueInterface {
    id: number,
    nomeLivro: string,
    autor: string,
    ano: string,
    valor: number,
    url: string,
    sinopse: string,
    dimensoes: DimensaoInterface
}

export interface DimensaoInterface {
    largura: number,
    altura: number,
    profundidade: number
}

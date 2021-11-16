export interface FaturamentoMensal {
    data: string,
    faturamento: number
}

export interface PopularidadeGenero {
    masculino: number,
    feminino: number
}

export interface FaturamentoProduto {
    idLivro: number;
    nomeLivro: string;
    data: string;
    faturamento: number;
}

export interface RankCliente {
    idCliente: number,
    nomeCliente: string,
    cpfCliente: string,
    comprasRealizadas: number
}
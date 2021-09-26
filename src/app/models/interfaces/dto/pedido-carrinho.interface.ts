export interface ItensPedido {
    idLivro: number;
    nomeLivro: string;
    qtdComprada: number;
    valorUnitario: number;
    valorTotal: number;
}

export interface FormasPagamento {
    idCartao: number;
    valorPago: number;
}

export interface Cupom {
    idCupom: number;
}

export interface PedidoCarrinhoDTO {
    enderecoId: number;
    idCliente: number;
    itensPedido: ItensPedido[];
    formasPagamento: FormasPagamento[];
    cupom: Cupom[];
}
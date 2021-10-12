export interface ItemPedido {
    idLivro: number;
    nomeLivro: string;
    qtdComprada: number;
    valorUnitario: number;
    valorTotal: number;
}

export interface FormaPagamentoInterface {
    idCartao?: number;
    valorPago: number;
}

export interface CupomPedidoInterface {
    idCupom: number;
}

export interface PayloadCarrinhoDTO {
    idEndereco: number;
    idCliente: number;
    valorTotal: number,
    itensPedido: ItemPedido[];
    formasPagamento: FormaPagamentoInterface[];
    cupoms: CupomPedidoInterface[];
}

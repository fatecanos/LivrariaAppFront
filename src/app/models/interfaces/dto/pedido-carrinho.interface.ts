export interface ItemPedido {
    idLivro: number;
    nomeLivro: string;
    qtdComprada: number;
    valorUnitario: number;
    valorTotal: number;
    url: string;
}

export interface FormaPagamentoInterface {
    idCartao?: number;
    valorPago: number;
}

export interface CupomPedidoInterface {
    id: number;
    valor: number;
}

export interface PayloadCarrinhoDTO {
    idEndereco: number;
    idCliente: number;
    valorTotal: number,
    trocoCupom: number;
    itensPedido: ItemPedido[];
    formasPagamento: FormaPagamentoInterface[];
    cupoms: CupomPedidoInterface[];
}

import { ItemCarrinhoInterface } from "./carrinho.interface";

export interface PedidoInterface {
    id: number;
    idEndereco: number;
    idCliente: number;
    valorTotal: number;
    numero: string;
    status: string;
    dataCriacao: Date;
    itensPedido: ItemPedidoInterface[];
    formasPagamento: FormasPagamento[];
    cupoms: any[];
}


export interface ItemPedidoInterface {
    id: number;
    idLivro: number;
    nomeLivro: string;
    qtdComprada: number;
    valorUnitario: number;
    valorTotal: number;
    statusPedido: string;
    quantidadeTrocada?: number;
    url: string;
}

export interface FormasPagamento {
    id: number;
    idCartao: number;
    valorPago: number;
}

export interface DetalhesPedidoInterface {
    id: number,
    carrinho: Array<ItemCarrinhoInterface>,
    valorTotal: number,
    subTotal: number,
    frete: number,
    data: Date,
    status: string,
}

export interface PedidosModalInterface {
    idPedido: number,
    idCliente: number,
    pedido?: PedidoInterface
}
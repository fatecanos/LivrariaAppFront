import { ItemCarrinhoInterface } from "./carrinho.interface";

export interface PerdidoInterface {
    id: number,
    numero: string,
    data: string,
    status: string
}

export interface DetalhesPedidoInterface {
    id: number,
    carrinho: Array<ItemCarrinhoInterface>,
    valorTotal: number,
    subTotal: number,
    frete: number,
    data: Date,
    status: string
}
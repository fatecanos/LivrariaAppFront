import { ItemCarrinhoInterface } from "./carrinho.interface";
import { CartaoClienteDTO, EnderecoDTO } from "./client.interface";

export interface VendaInterface {
    id: string,
    data: string,
    status: string,
    isCancelamentoSoliciado: boolean,
    isTrocaSocilidado: boolean,
    isEntregaConcluida: boolean
}

export interface PedidoFinalizadoDTO {
    enderecoDTO: EnderecoDTO,
    cartaoCreditoPreferencial: CartaoClienteDTO,
    novoCartao: CartaoClienteDTO,
    isNovoEndereco: boolean,
    isNovoCartao: boolean,
    itensCarrinho: ItemCarrinhoInterface[],
    total: number,
    parcelamento: string,
    cuponsTroca: CupomTrocaDTO[],
    cupomPromocional: CupomPromocionalDTO
}

export interface CupomTrocaDTO {
    id: number,
    descricao: string,
    desconto: number
}

export interface CupomPromocionalDTO {
    id: number,
    descricao: string,
    desconto: number
}
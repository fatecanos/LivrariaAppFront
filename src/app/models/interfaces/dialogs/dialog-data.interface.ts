import { CarrinhoStoreInterface, ItemCarrinhoInterface } from "../dto/carrinho.interface";
import { EnderecoDTO } from "../dto/client.interface";

export interface ClienteDialogInterface {
    entity: string,
    idCliente: number
}

export interface DataDialogInterface {
    id: number
}

export interface PedidoFinalizacaoInterface {
    enderecoDTO: EnderecoDTO,
    isNovoEndereco: boolean,
    itensCarrinho: ItemCarrinhoInterface[],
    total: number,
}
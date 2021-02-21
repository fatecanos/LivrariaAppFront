export interface ClienteInterface {
    id?: number,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    cpf: string,
    email: string,
    senha?: string,
    confirmacaoSenha?: string,
}

export interface EnderecoInterface {
    id: number,
    logradouro: string,
    cep: string,
    numero: string,
    complemento: string,
    tipoEndereco: TipoEnderecoInterface,
    cidade: CidadeInterface
}

export interface CidadeInterface {
    id: number,
    descricao: string,
    estado: EstadoInterface
}

export interface EstadoInterface {
    id: number,
    descricao: string
}

export interface TipoEnderecoInterface {
    id: number,
    descricao: string
}
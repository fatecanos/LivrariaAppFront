export interface ClienteInterface {
    id?: number,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    cpf: string,
    email: string,
    senha: string,
    confirmacaoSenha: string,
    enderecos: EnderecoInterface[]
}

export interface EnderecoInterface {
    id: number,
    logradouro: string,
    cep: string,
    numero: string,
    bairro: string,
    complemento: string,
    tipoEndereco: string,
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
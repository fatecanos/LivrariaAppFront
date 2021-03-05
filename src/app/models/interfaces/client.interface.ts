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
    tipoEndereco: string,
    tipoLogradouro: TipoLogradouroInterface,
    logradouro: string,
    cep: string,
    numero: string,
    bairro: string,
    complemento: string,
    tipoResidencia: string,
    cidade: CidadeInterface,
    pais: string,
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

export interface TipoLogradouroInterface {
    id: number,
    descricao: string
}

export interface BandeiraCartaoInterface {
    id: number,
    descricao: string,
}

export interface CartaoInterface {
    id: number,
    numero: string,
    nome: string,
    bandeira: string,
    isPrincipal: boolean
}
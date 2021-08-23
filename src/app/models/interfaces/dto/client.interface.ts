export interface ClienteDTO {
    id: number,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    cpf: string,
    email: string,
    senha: string,
    confirmacaoSenha: string,
    enderecos: EnderecoDTO[],
    telefones: TelefoneDTO[]
}

export interface TelefoneDTO {
    id: number,
    telefone: string
}

export interface EnderecoDTO {
    id: number,
    apelidoId: string,
    tipoEndereco: TipoEnderecoEnum,
    tipoLogradouro: string,
    logradouro: string,
    cep: string,
    numero: string,
    bairro: string,
    complemento: string,
    tipoResidenciaId: number,
    cidade: CidadeDTO,
    pais: string,
}

export interface CidadeDTO {
    id: number,
    descricao: string,
    estado: EstadoDTO
}

export interface EstadoDTO {
    id: number,
    uf: string,
    dataCriacao?: Date,
    ativo?: boolean
}

export enum TipoEnderecoEnum {
    COBRANCA = 'cobranca',
    ENTREGA = 'entrega'
}

export interface TipoLogradouroDTO {
    id: number,
    descricao: string
}

export interface BandeiraCartaoDTO {
    id: number,
    descricao: string,
}

export interface CartaoClienteDTO {
    id: number,
    numero: string,
    nome: string,
    bandeira: string,
    isPrincipal: boolean
}

export interface EnderecoSimplificadoDTO {
    id: number;
    logradouro: string;
    cep: string;
    numero: string;
    bairro: string;
    complemento: string;
    tipoEnderecoId: number;
    tipoLogradouroId: number;
    cidade: number;
    estado: number;
    pais: string;
}

export interface TipoEnderecoDTO {
    id: number,
    description: string
}
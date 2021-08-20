export interface ClienteDTO {
  id: number;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  cpf: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
  ativo: boolean;
  enderecos: EnderecoDTO[];
}

export interface EnderecoDTO {
  id: number;
  tipoEndereco: TipoEnderecoEnum;
  tipoLogradouroId: TipoLogradouroDTO;
  logradouro: TipoLogradouroDTO;
  cep: string;
  numero: string;
  bairro: string;
  complemento: string;
  tipoResidencia: string;
  cidade: CidadeDTO;
  pais: string;
}

export interface CidadeDTO {
  id: number;
  nome: string;
}

export interface EstadoDTO {
  id: number;
  descricao: string;
}

export enum TipoEnderecoEnum {
  COBRANCA = 'cobranca',
  ENTREGA = 'entrega',
}

export interface TipoLogradouroDTO {
  id: number;
  descricao: string;
}

export interface BandeiraCartaoDTO {
  id: number;
  descricao: string;
}

export interface CartaoClienteDTO {
  id: number;
  numero: string;
  nome: string;
  bandeira: string;
  isPrincipal: boolean;
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
  cidade: string;
  estado: string;
  pais: string;
}

export interface TipoEnderecoDTO {
  id: number;
  description: string;
}

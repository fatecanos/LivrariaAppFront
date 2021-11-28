import { CategoriaInterface } from './utils-livro-form.interface';

export interface LivroDTO {
  id: number;
  titulo: string;
  autor: string;
  ano: string;
  editora: string;
  edicao: string;
  isbn: string;
  numeroPaginas: string;
  sinopse: string;
  url: string;
  codigoBarras: string;
  valorVenda: number;
  valorCompra: number;
  estoque: number;
  dimensoes: DimensoesDTO;
  ativo?: boolean;
  categorias: CategoriaInterface[];
  quantidadeSelecionada: number;
  grupoPrecificacao: number;
}

export interface DimensoesDTO {
  altura: number;
  largura: number;
  peso: number;
  profundidade: number;
}

export interface GrupoPrecificacaoDTO {
  id: number;
  descricao: string;
  nome: string;
  margem: number;
  taxa: number;
}

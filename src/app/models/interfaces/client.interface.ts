export interface ClientInterface {
    id?: number,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    cpf: string,
    email: string,
    senha?: string,
    confirmacaoSenha?: string,
    endereco?: string,
    bairro?: string,
    cidade?: string,
    estado?: string,
    complemento?: string,
    tipoEndereco?: string
}
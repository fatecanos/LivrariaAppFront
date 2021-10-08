export interface CupomDTO {
    id: number,
    nome: string,
    tipoCupom: TipoCupomEnum,
    valor: number
}

export enum TipoCupomEnum {
    PROMOCIONAL = 'PROMOCIONAL',
    TROCA = 'TROCA'
}
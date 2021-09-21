export interface CupomDTO {
    id: number,
    codigo: string,
    tipo: TipoCupomEnum,
    valor: number
}

export enum TipoCupomEnum {
    PROMOCIONAL = 'PROMOCIONAL',
    TROCA = 'TROCA'
}
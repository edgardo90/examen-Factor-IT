import type { IPurchase } from './purchase'

export interface IUser {
    id:number;
    email: string;
    name?: string;
    lastName?: string;
    password: string
    isVip: boolean;
    purchases: IPurchase[]; // aca voy a tener el historial de compras
}
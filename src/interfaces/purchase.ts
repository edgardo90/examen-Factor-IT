import type { IPurchasedProduct } from '../interfaces/product'

export interface IPurchase {
    id: number;
    totalAmount: number;
    date: string;
    products: IPurchasedProduct[]
}
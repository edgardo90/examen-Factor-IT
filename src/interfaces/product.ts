export interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
    imageUrl: string[]
}
export interface IPurchasedProduct extends IProduct {
    quantity: number
}
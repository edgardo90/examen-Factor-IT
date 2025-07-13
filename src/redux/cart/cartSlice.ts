
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IPurchasedProduct, IProduct } from '../../interfaces/product'
import { current } from '@reduxjs/toolkit';

interface ICartState {
    products: IPurchasedProduct[];
    isVip: boolean;
    isSpecialDay: boolean;
    totalCost: number;
    totalProducts: number;
    discount:number;
    subtotalCost:number;
}

const initialState: ICartState = {
    products: [],
    isVip: false,
    isSpecialDay: false,
    totalCost: 0,
    totalProducts: 0,
    discount:0,
    subtotalCost:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        SET_CART: (state) => {
            state.isSpecialDay = false;
            state.isVip = false;
            state.products = [];
            state.totalCost = 0;
            state.totalProducts = 0;
            state.subtotalCost = 0;
            state.discount = 0
        },
        ADD_PRODUCT_TO_CART: (state, action: PayloadAction<IProduct>) => {
            const purchasedProduct = {
                ...action.payload,
                quantity: 1
            }
            state.products = [...state.products, purchasedProduct]
            state.totalProducts++
            state.subtotalCost += purchasedProduct.price
        },
        SUM_QUANTITY_PRODUCT: (state, action: PayloadAction<number>) => {
            const copyProducts: IPurchasedProduct[] = JSON.parse(JSON.stringify(state.products)); // creo una copia profunda 
            const idProduct = action.payload;
            const findProduct = copyProducts.find(el => el.id === idProduct);
            if (findProduct) {
                findProduct.quantity++;
                state.products = copyProducts;
                state.totalProducts++
                state.subtotalCost += findProduct.price
            }
        },
        SUBTRACT_QUANTITY_PRODUCT: (state, action: PayloadAction<number>) => {
            const copyProducts: IPurchasedProduct[] = JSON.parse(JSON.stringify(state.products)); // creo una copia profunda 
            const idProduct = action.payload;
            const findProduct = copyProducts.find(el => el.id === idProduct);
            if (findProduct) {
                findProduct.quantity--;
                state.products = findProduct.quantity <= 0 ? copyProducts.filter(el => el.id !== idProduct)
                    : copyProducts;
                state.totalProducts--
                state.subtotalCost -= findProduct.price
            }
        }
    }
})

export const {
    SET_CART,
    ADD_PRODUCT_TO_CART,
    SUM_QUANTITY_PRODUCT,
    SUBTRACT_QUANTITY_PRODUCT
} = cartSlice.actions;

export default cartSlice.reducer



import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IPurchasedProduct, IProduct } from '../../interfaces/product'

interface ICartState {
    products: IPurchasedProduct[];
    isVip: boolean;
    isSpecialDay: boolean
    totalAmount: number
}

const initialState: ICartState = {
    products: [],
    isVip: false,
    isSpecialDay: false,
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        SET_CART: (state) => {
            state.isSpecialDay = false,
                state.isVip = false,
                state.products = [],
                state.totalAmount = 0
        },
        ADD_PRODUCT_TO_CART: (state, action: PayloadAction<IProduct>) => {
            const purchasedProduct = {
                ...action.payload,
                quantity: 1
            }
            state.products = [...state.products, purchasedProduct]
        },
        SUM_QUANTITY_PRODUCT: (state, action: PayloadAction<number>) => {
            const copyProducts: IPurchasedProduct[] = JSON.parse(JSON.stringify(state.products)); // creo una copia profunda 
            const idProduct = action.payload;
            const findProduct = copyProducts.find(el => el.id === idProduct);
            const findIndexProduct = copyProducts.findIndex(el => el.id === idProduct);
            if (findProduct && findIndexProduct >= 0) {
                findProduct.quantity++;
                state.products = copyProducts;
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


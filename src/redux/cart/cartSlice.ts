
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
           state.products = [] ,
           state.totalAmount = 0
        },
        ADD_PRODUCT_TO_CART: (state, action: PayloadAction<IProduct>) => {
            const purchasedProduct = {
                ...action.payload,
                quantity: 1
            }
            state.products = [...state.products, purchasedProduct]
        }
    }
})

export const {
    SET_CART,
    ADD_PRODUCT_TO_CART
} = cartSlice.actions;

export default cartSlice.reducer


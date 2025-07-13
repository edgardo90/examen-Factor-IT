
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IPurchasedProduct, IProduct } from '../../interfaces/product'
import { current } from '@reduxjs/toolkit';
import { getUserLocalStorage } from '../../utils/userLocalStorge'

interface ICartState {
    products: IPurchasedProduct[];
    isVip: boolean;
    totalCost: number;
    totalProducts: number;
    discount: number;
    subtotalCost: number;
    specialDay: 'Normal' | 'Reyes Magos' | 'Día del Niño' | 'Cyber Monday' | 'Navidad' | ''
}

const initialState: ICartState = {
    products: [],
    isVip: false,
    totalCost: 0,
    totalProducts: 0,
    discount: 0,
    subtotalCost: 0,
    specialDay: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        SET_CART: (state) => {
            state.isVip = false;
            state.products = [];
            state.totalCost = 0;
            state.totalProducts = 0;
            state.subtotalCost = 0;
            state.discount = 0;
            state.specialDay = ''
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
        },
        TOTAL_COST_TO_CART: (state) => {
            let discount = 0;
            const subtotalCost = state.subtotalCost;
            state.products.sort((a, b) => a.price - b.price)
            //descuento Si se compran exactamente 4 productos
            if (state.totalProducts === 4) {
                const generalDiscount = (25 * state.subtotalCost) / 100;
                discount += generalDiscount;
            }
            //descuento Si se compran mas de 10 productos
            if (state.totalProducts > 10) {
                discount += 100;
            }
            //descuento si es por fecha especial
            if (state.specialDay && state.specialDay !== 'Normal') {
                discount += 300;
            }
            //descuento si es el usuario es VIP
            const user = getUserLocalStorage();
            if ((user && user.isVip) && (!state.specialDay || state.specialDay === 'Normal')) {
                discount += 500;
                const bonusProduct = state.products[0];
                discount = state.totalProducts > 1 ? discount + bonusProduct.price : discount + 0 
            }
            state.discount = discount;
            state.totalCost = subtotalCost - discount;
        },
        DELETE_PRODUCT_TO_CART: (state, action: PayloadAction<number>) => {
            const copyProducts: IPurchasedProduct[] = JSON.parse(JSON.stringify(state.products)); // creo una copia profunda 
            const idProduct = action.payload;
            const findProduct = copyProducts.find(el => el.id === idProduct);
            if (findProduct) {
                state.totalProducts -= findProduct.quantity;
                state.subtotalCost -= findProduct.quantity * findProduct.price;
                state.products = state.products.filter(el => el.id !== findProduct.id);
            }
        },
        UPDATE_SPECIAL_DAY_TO_CART: (state, action: PayloadAction<'Normal' | 'Reyes Magos' | 'Día del Niño' | 'Cyber Monday' | 'Navidad' | ''>) => {
            const specialDay = action.payload;
            state.specialDay = specialDay;
        }
    }
})

export const {
    SET_CART,
    ADD_PRODUCT_TO_CART,
    SUM_QUANTITY_PRODUCT,
    SUBTRACT_QUANTITY_PRODUCT,
    TOTAL_COST_TO_CART,
    DELETE_PRODUCT_TO_CART,
    UPDATE_SPECIAL_DAY_TO_CART
} = cartSlice.actions;

export default cartSlice.reducer


//esto es un ejemplo de verificar que funcione redux

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        INCREMENT_COUNTER: (state, action: PayloadAction<number>) => {
            state.value += 1
        },
        DECREMENT_COUNTER: (state, action: PayloadAction<number>) => {
            state.value -= 1
        },
        INCREMENT_COUNTER_BY_AMOUNT: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        DECREMENT_COUNTER_BY_AMOUNT: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
    },
})

export const {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    INCREMENT_COUNTER_BY_AMOUNT,
    DECREMENT_COUNTER_BY_AMOUNT
} = counterSlice.actions

export default counterSlice.reducer
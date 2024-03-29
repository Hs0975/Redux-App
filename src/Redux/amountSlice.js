import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:'Priya',
    amount: 24490701,
}

export const amountSlice = createSlice({

    name: 'BankApp',
    initialState,
    reducers: {

        withdrawFirst: (state, action) => {
            state.amount -= 10000;
        },

        withdrawSecond: (state, action) => {
            state.amount -= 5000;
        }

    }

})

export const { withdrawFirst, withdrawSecond } = amountSlice.actions;
export default amountSlice.reducer
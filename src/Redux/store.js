import {configureStore} from '@reduxjs/toolkit'
import bankReducer from './amountSlice'
export const store = configureStore({
    reducer:{
BankApp:bankReducer,
    },
})
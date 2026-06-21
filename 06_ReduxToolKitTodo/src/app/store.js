import {configureStore} from '@reduxjs/toolkit'
import todoReducer, { todoSlice } from '../features/Todo/todoSlice'

export const store = configureStore({
    reducer:todoReducer
})
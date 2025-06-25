import { configureStore } from '@reduxjs/toolkit'
import todoRedudcer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoRedudcer
})
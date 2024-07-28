//to make store we first have to import cofigurestore
// all application have only one store 
import configureStore from '@reduxjs/toolkit'
import todoSlice from '../features/todo/todoSlice'


export const store=configureStore({
    reducer: todoSlice.reducer
})
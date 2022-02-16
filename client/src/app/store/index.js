import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice"
import products from "./productsSlice"


const store = configureStore({
    reducer: {categories, products},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
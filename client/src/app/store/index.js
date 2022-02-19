import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice"
import products from "./productsSlice"
import auth from "./authSlice"


const store = configureStore({
    reducer: {categories, products, auth},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
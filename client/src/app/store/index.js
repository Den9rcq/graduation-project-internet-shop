import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice"


const store = configureStore({
    reducer: {categories},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartService from '../services/cart.service'
import { toast } from 'react-toastify'

const initialState = {
    order: [],
    cartLoadingStatus: 'loading',
    totalProduct: 0
}

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    () => cartService.getCart()
)

export const addedProductToCart = createAsyncThunk(
    'cart/addedProductToCart',
    (payload) => {
        try {
            toast.success(`Вы добавили товар в карзину в количестве ${payload.count} шт`)
            return cartService.addProductToCart(payload)
        } catch (e) {
            toast.success('Не получилось добавить товар в корзину')
        }
    }
)

export const removeProductToCart = createAsyncThunk(
    'cart/removeProductToCart',
    (id) => cartService.removeProductToCart(id)
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // Get cart
        builder
            .addCase(fetchCart.pending, state => {
                state.cartLoadingStatus = 'loading'
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.order = action.payload
                state.totalProduct = action.payload.length
                state.cartLoadingStatus = 'idle'
            })
            .addCase(fetchCart.rejected, state => {
                state.cartLoadingStatus = 'error'
            })
        // Added product to cart
        builder
            .addCase(addedProductToCart.pending, state => {
                state.cartLoadingStatus = 'loading'
            })
            .addCase(addedProductToCart.fulfilled, (state, action) => {
                state.order = action.payload
                state.totalProduct = action.payload.length
                state.cartLoadingStatus = 'idle'
            })
            .addCase(addedProductToCart.rejected, state => {
                state.cartLoadingStatus = 'error'
            })

        // Remove product to cart
        builder
            .addCase(removeProductToCart.pending, state => {
                state.cartLoadingStatus = 'loading'
            })
            .addCase(removeProductToCart.fulfilled, (state, action) => {
                state.order = action.payload
                state.totalProduct = action.payload.length
                state.cartLoadingStatus = 'idle'
            })
            .addCase(removeProductToCart.rejected, state => {
                state.cartLoadingStatus = 'error'
            })
    }
})

const { reducer } = cartSlice

export const getCart = state => state.cart.order
export const getCartProduct = (productId) => state => state.cart.order.find(product => product.productId === productId) || []
export const getTotalProduct = state => state.cart.totalProduct
export const getTotalSumProducts = state => state.cart.order.map(product => product.sumProduct).reduce((sum, current) => sum + current, 0)

export default reducer

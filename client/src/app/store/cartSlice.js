import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cart.service";


const cartAdapter = createEntityAdapter()

const initialState = cartAdapter.getInitialState({
    cartLoadingStatus: 'loading',
    total: 0
})

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    () => cartService.getCart()
)

export const addedProductToCart = createAsyncThunk(
    'cart/addedProductToCart',
    (payload) => cartService.addProductToCart(payload)
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
                cartAdapter.setAll(state, action.payload)
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
                cartAdapter.setOne(state, action.payload)
                state.cartLoadingStatus = 'idle'
            })
            .addCase(addedProductToCart.rejected, state => {
                state.cartLoadingStatus = 'error'
            })
    }
})

const { reducer, actions } = cartSlice


export const { selectAll: getCart } = cartAdapter.getSelectors(state => state.cart)


export default reducer
import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";

const productsAdapter = createEntityAdapter({
    selectId: product => product._id,
    sortComparer: (a, b) => b.rate - a.rate
})
const initialState = productsAdapter.getInitialState({
    productsLoadingStatus: 'loading',
    sortStatus: 'popular',
    searchString: ''
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortStatusChanged: (state, action) => {
            state.sortStatus = action.payload
        },
        searchStringChanged: (state, action) => {
            state.searchString = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.productsLoadingStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                productsAdapter.setAll(state, action.payload)
                state.productsLoadingStatus = 'idle'
            })
            .addCase(fetchProducts.rejected, state => {
                state.productsLoadingStatus = 'error'
            })
    }
})

const { reducer, actions } = productsSlice
export const { sortStatusChanged, searchStringChanged } = actions

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    () => productService.fetchAll()
)

export const {
    selectAll: getProducts,
    selectById
} = productsAdapter.getSelectors(state => state.products)

export const getFilteredProducts = createSelector(
    getProducts,
    state => state.categories.activeCategory,
    (products, activeCategory) => (
        activeCategory.name === 'all' || !activeCategory?._id
            ? products
            : products.filter(product => product.category === activeCategory._id)
    )
)

export const getProductById = (id) => (state) => selectById(state, id)
export const getSortStatus = (state) => state.products.sortStatus
export const getSearchString = (state) => state.products.searchString
export const getProductLoadingStatus = (state) => state.products.productsLoadingStatus

export default reducer
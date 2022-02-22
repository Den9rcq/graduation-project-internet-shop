import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";
import { getCurrentCategory } from "./categoriesSlice";

const productsAdapter = createEntityAdapter({
    selectId: product => product._id,
    sortComparer: (a, b) => b.rate - a.rate
})

const initialState = productsAdapter.getInitialState({
    productsLoadingStatus: 'loading',
    sortStatus: 'popular',
    searchString: '',
    selectedProduct: null
})

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    () => productService.fetchAll()
)

export const createProduct = createAsyncThunk(
    'products/createProduct',
    (payload) => productService.create(payload)
)

export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    (payload) => productService.update(payload)
)

export const removeProduct = createAsyncThunk(
    'products/removeProduct',
    (id) => productService.delete(id)
)



const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortStatusChanged: (state, action) => {
            state.sortStatus = action.payload
        },
        searchStringChanged: (state, action) => {
            state.searchString = action.payload
        },
        selectedProductInstalled: (state, action) => {
            state.selectedProduct = action.payload
        }
    },
    extraReducers: builder => {
        // Get products
        builder
            .addCase(fetchProducts.pending, state => {
                state.productsLoadingStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                productsAdapter.setAll(state, action.payload)
                state.productsLoadingStatus = 'success'
            })
            .addCase(fetchProducts.rejected, state => {
                state.productsLoadingStatus = 'error'
            })

        // Create product
        builder
            .addCase(createProduct.pending, state => {
                state.productLoadingStatus = 'loading'
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                productsAdapter.setOne(state, action.payload)
                state.productsLoadingStatus = 'success'
            })
            .addCase(createProduct.rejected, state => {
                state.productsLoadingStatus = 'error'
            })

        // Update product
        builder
            .addCase(updateProduct.pending, state => {
                state.productLoadingStatus = 'loading'
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                productsAdapter.setOne(state, action.payload)
                state.productsLoadingStatus = 'success'
            })
            .addCase(updateProduct.rejected, state => {
                state.productsLoadingStatus = 'error'
            })

        // Delete product
        builder
            .addCase(removeProduct.pending, state => {
                state.productLoadingStatus = 'loading'
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                productsAdapter.removeOne(state, action.payload)
                state.productsLoadingStatus = 'success'
            })
            .addCase(removeProduct.rejected, state => {
                state.productsLoadingStatus = 'error'
            })
    }
})

const { reducer, actions } = productsSlice
export const { sortStatusChanged, searchStringChanged, selectedProductInstalled } = actions

export const { selectAll: getProducts, selectById } = productsAdapter.getSelectors(state => state.products)

export const getFilteredProducts = createSelector(
    getProducts,
    getCurrentCategory(),
    (products, activeCategory) => (
        activeCategory.name === 'all' || !activeCategory?._id
            ? products
            : products.filter(product => product.category === activeCategory._id)
    )
)
export const getProductById = (id) => (state) => selectById(state, id)
export const getSortStatus = () => (state) => state.products.sortStatus
export const getSearchString = () => (state) => state.products.searchString
export const getProductLoadingStatus = () => (state) => state.products.productsLoadingStatus
export const getSelectedProduct = () => (state) => state.products.selectedProduct

export default reducer
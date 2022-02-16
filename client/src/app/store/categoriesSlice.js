import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

const categoriesAdapter = createEntityAdapter({
    selectId: category => category._id
});
const initialState = categoriesAdapter.getInitialState({
    activeCategory: { name: 'all' },
    categoriesLoadingStatus: 'idle'
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        activeCategoryChanged: (state, action) => {
            state.activeCategory = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.categoriesLoadingStatus = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                categoriesAdapter.setAll(state, action.payload)
                state.categoriesLoadingStatus = 'idle'
            })
            .addCase(fetchCategories.rejected, state => {
                state.categoriesLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const { reducer, actions } = categoriesSlice

export const { activeCategoryChanged } = actions

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    () => categoryService.fetchAll()
)

export const { selectAll: getCategories } = categoriesAdapter.getSelectors(state => state.categories)

export const getCurrentCategory = () => (state) => state.categories.activeCategory

export default reducer
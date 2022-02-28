import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import userService from '../services/user.service'
import { toast } from 'react-toastify'
import history from '../utils/history'

const initialState = localStorageService.getAccessToken()
    ? {
        authLoadingStatus: 'loading',
        currentUser: {},
        isLoggedIn: true
    }
    : {
        authLoadingStatus: 'loading',
        currentUser: null,
        isLoggedIn: false
    }

export const signInAuth = createAsyncThunk(
    'auth/signInAuth',
    async({ email, password }) => {
        try {
            const data = await authService.login({ email, password })
            localStorageService.setTokens(data)
            history.push('/')
            toast.success('Вы вошли в систему')
            return await userService.getCurrentUser()
        } catch (e) {
            toast.error('Неверные данные')
        }
    }
)

export const signUpAuth = createAsyncThunk(
    'auth/signUpAuth',
    async(payload) => {
        try {
            const data = await authService.register(payload)
            localStorageService.setTokens(data)
            toast.success('Вы успешно зарегестрировались')
            history.push('/')
            return await userService.getCurrentUser()
        } catch (e) {
            if (e.response.data.error.message === 'EMAIL_EXISTS') {
                toast.error('Такой Email уже существует')
            } else {
                toast.error('Вы не зарегестрированны, проверте данные')
            }
        }
    }
)

export const isLoggedInAuth = createAsyncThunk(
    'auth/isLoggedInAuth',
    async() => {
        return await userService.getCurrentUser()
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        currentUserLogOut: state => {
            state.currentUser = null
            state.isLoggedIn = false
        }
    },
    extraReducers: builder => {
        // Login
        builder
            .addCase(signInAuth.pending, state => {
                state.authLoadingStatus = 'loading'
            })
            .addCase(signInAuth.fulfilled, (state, action) => {
                state.currentUser = action.payload
                state.authLoadingStatus = 'success'
                state.isLoggedIn = true
            })
            .addCase(signInAuth.rejected, state => {
                state.authLoadingStatus = 'error'
            })

        // Register
        builder
            .addCase(signUpAuth.pending, state => {
                state.authLoadingStatus = 'loading'
            })
            .addCase(signUpAuth.fulfilled, (state, action) => {
                state.currentUser = action.payload
                state.authLoadingStatus = 'success'
            })
            .addCase(signUpAuth.rejected, state => {
                state.authLoadingStatus = 'error'
            })
        // Authorization
        builder
            .addCase(isLoggedInAuth.pending, state => {
                state.authLoadingStatus = 'loading'
            })
            .addCase(isLoggedInAuth.fulfilled, (state, action) => {
                state.currentUser = action.payload
                state.authLoadingStatus = 'success'
            })
            .addCase(isLoggedInAuth.rejected, state => {
                state.authLoadingStatus = 'error'
            })
    }
})

const { reducer, actions } = authSlice

export const { currentUserLogOut } = actions

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData()
    dispatch(currentUserLogOut())
}

export const getCurrentUser = () => (state) => state.auth.currentUser
export const getAdmin = () => (state) => state.auth.currentUser?.admin
export const getAuthLoadingStatus = () => (state) => state.auth.authLoadingStatus
export const getIsLoggedIn = () => (state) => state.auth.isLoggedIn

export default reducer

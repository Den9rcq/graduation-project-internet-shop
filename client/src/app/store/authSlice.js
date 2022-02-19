import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";

const initialState = localStorageService.getAccessToken()
    ? {
        authLoadingStatus: 'loading',
        currentUser: {},
        isLoggedIn: true,
    }
    : {
        authLoadingStatus: 'idle',
        currentUser: null,
        isLoggedIn: false,
    };

export const signInAuth = createAsyncThunk(
    'auth/signInAuth',
    async ({ email, password }) => {
        const data = await authService.login({ email, password })
        localStorageService.setTokens(data)
        return await userService.getCurrentUser()
    }
)

export const signUpAuth = createAsyncThunk(
    'auth/signUpAuth',
    async (payload) => {
        const data = await authService.register(payload)
        localStorageService.setTokens(data)
        return await userService.getCurrentUser()
    }
)

export const isLoggedInAuth = createAsyncThunk(
    'auth/isLoggedInAuth',
    async () => {
        return await userService.getCurrentUser()
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        currentUserLogOut: state => {
            state.currentUser = null
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
                state.authLoadingStatus = 'idle'
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
                state.authLoadingStatus = 'idle'
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
                state.authLoadingStatus = 'idle'
            })
            .addCase(isLoggedInAuth.rejected, state => {
                state.authLoadingStatus = 'error'
            })

    }
})

const { reducer, actions } = authSlice

export const { currentUserLogOut } = actions

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(currentUserLogOut());
};

export const getCurrentUser = (state) => state.auth.currentUser
export const getIsLoggedIn = (state) => state.auth.isLoggedIn

export default reducer
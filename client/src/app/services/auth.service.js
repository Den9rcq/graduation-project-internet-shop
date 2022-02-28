import axios from 'axios'
import localStorageService from './localStorage.service'
import config from '../../config.json'

export const httpAuth = axios.create({
    baseURL: config.apiEndpoint + 'auth/'
})

const authService = {
    register: async(payload) => {
        const { data } = await httpAuth.post('signUp', payload)
        return data
    },
    login: async({ email, password }) => {
        const { data } = await httpAuth.post('signInWithPassword', {
            email,
            password,
            returnSecureToken: true
        })
        return data
    },
    refresh: async() => {
        const { data } = await httpAuth.post('token', {
            grant_type: 'refresh_token',
            refreshToken: localStorageService.getRefreshToken()
        })
        return data
    }
}
export default authService

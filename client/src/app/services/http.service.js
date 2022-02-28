import axios from 'axios'
import configFile from '../../config.json'
import localStorageService from './localStorage.service'
import authService from './auth.service'
import { toast } from 'react-toastify'

const http = axios.create({
    baseURL: configFile.apiEndpoint
})

http.interceptors.request.use(
    async(config) => {
        const expiresDate = localStorageService.getTokenExpiresDate()
        const refreshToken = localStorageService.getRefreshToken()
        const isExpired = refreshToken && expiresDate < Date.now()
        if (isExpired) {
            const data = await authService.refresh()
            localStorageService.setTokens(data)
        }
        const accessToken = localStorageService.getAccessToken()
        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`
            }
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    res => res,
    error => {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500

        if (!expectedErrors) {
            console.log(error)
            toast.error('Сервер не отвечат. Попробуйте позже')
        }
        return Promise.reject(error)
    }
)

const httpService = {
    get: http.get,
    post: http.post,
    patch: http.patch,
    delete: http.delete
}

export default httpService

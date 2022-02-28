import httpService from './http.service'
import localStorageService from './localStorage.service'

const userEndpoint = 'user/'
const userService = {
    getCurrentUser: async() => {
        const { data } = await httpService.get(userEndpoint + localStorageService.getUserId())
        return data
    }
}

export default userService

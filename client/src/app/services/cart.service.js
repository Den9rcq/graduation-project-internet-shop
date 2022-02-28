import httpService from './http.service'

const productEndpoint = 'cart/'
const cartService = {
    getCart: async() => {
        const { data } = await httpService.get(productEndpoint)
        return [...data.order]
    },
    addProductToCart: async(payload) => {
        const { data } = await httpService.post(productEndpoint, payload)
        return [...data.order]
    },
    removeProductToCart: async(id) => {
        const { data } = await httpService.delete(productEndpoint + id)
        return [...data.order]
    }
}

export default cartService

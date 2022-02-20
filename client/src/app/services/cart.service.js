import httpService from "./http.service";

const productEndpoint = 'cart/'
const cartService = {
    getCart: async () => {
        const { data } = await httpService.get(productEndpoint)
        return data
    },
    addProductToCart: async (payload) => {
        const { data } = await httpService.post(productEndpoint, payload)
        return data
    }
}

export default cartService
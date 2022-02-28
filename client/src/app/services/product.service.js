import httpService from './http.service'

const productEndpoint = 'product/'
const productService = {
    fetchAll: async() => {
        const { data } = await httpService.get(productEndpoint)
        return data
    },
    getProduct: async(id) => {
        const { data } = await httpService.get(productEndpoint + id)
        return data
    },
    create: async(payload) => {
        const { data } = await httpService.post(productEndpoint, payload)
        return data
    },
    update: async({ _id, ...payload }) => {
        const { data } = await httpService.patch(productEndpoint + _id, payload)
        return data
    },
    delete: async(id) => {
        const { data } = await httpService.delete(productEndpoint + id)
        console.log(data)
        return data
    }
}

export default productService

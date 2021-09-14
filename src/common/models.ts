export type InitialStateType = {
    _id: string
    nameOfProduct: string
    category: ProductCategoryType
    price: number
    img: string
    quantity: number
    popular: number
}

export type ProductCategoryType = {
    _id: string, name: string
}

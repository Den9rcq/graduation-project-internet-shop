export type InitialStateType = {
    _id: string
    name: string
    category: ProductCategoryType
    price: number
    img: string
    quantity: number
    rate: number
}

export type ProductCategoryType = {
    _id: string, name: string
}

export type DataType = {
    initialState: InitialStateType[],
    productCategory: ProductCategoryType[]
}
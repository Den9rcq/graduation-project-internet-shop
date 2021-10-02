import {InitialStateType} from "../common/models";
type GetFilteredProductsByNameType = {
    value: string,
    state: InitialStateType[],
}

export const getFilteredProductsByName = (value: string, state: InitialStateType[]): InitialStateType[] => {
    const saveState = [...state]
    return  saveState.filter(s => s.nameOfProduct.toLowerCase().includes(value))
}
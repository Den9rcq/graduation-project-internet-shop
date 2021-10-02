import {InitialStateType} from "../common/models";

export const getFilterState = (value: string, state: InitialStateType[]) => [...state].filter(s => s.nameOfProduct.toLowerCase().includes(value))
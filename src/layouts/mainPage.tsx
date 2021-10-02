import React, {useState} from 'react';
import {InitialStateType, ProductCategoryType} from '../common/models';
import SearchPanel from "../components/searchPanel";
import Categories from "../components/categories";
import Sort from "../components/sort";
import CardProductsList from "../components/cardProductsList";
import {initialState, productCategory} from "../database";

const MainPage = () => {
    const [state, setState] = useState<InitialStateType[]>(initialState)
    const [category] = useState<ProductCategoryType[]>(productCategory)
    const [currentCategory, setCurrentCategory] = useState<string>('')

    // Установка категории
    const getCurrentCategory = (category: string) => {
        setCurrentCategory(category)
    }
    // Фильтрация по категориям
    const filteredProduct: InitialStateType[] = currentCategory
        ? state.filter((product) => product.category.name === currentCategory)
        : state

    // Фильтрация продуктов по имени
    const getResultSearch = (value: string) => {
        const saveState = [...initialState]
        const filterState = saveState.filter(s => s.nameOfProduct.toLowerCase().includes(value))
        setState(filterState)
    }

    // Сортировка продуктов
    const sortProducts = (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLButtonElement
        const saveState = [...state]
        switch (target['name']) {
            case 'popular':
                saveState.sort((a, b) => b.popular - a.popular)
                setState(saveState)
                break
            case 'highToLow':
                saveState.sort((a, b) => b.price - a.price)
                setState(saveState)
                break
            case 'lowToHigh':
                saveState.sort((a, b) => a.price - b.price)
                setState(saveState)
                break
            default:
                setState(saveState)
        }
    }

    return (
        <>
            <SearchPanel onSearch={getResultSearch}/>
            <div className="row">
                <div className="col s4">
                    <Categories
                        productCategory={category}
                        getCurrentCategory={getCurrentCategory}
                        currentCategory={currentCategory}/>
                </div>
                <div className="col s8">
                    <Sort
                        onSortProduct={sortProducts}/>
                    <CardProductsList
                        state={filteredProduct}/>
                </div>
            </div>
        </>
    );
};

export default MainPage;
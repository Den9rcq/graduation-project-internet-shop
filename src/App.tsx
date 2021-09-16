import React, {useState} from 'react';
import Header from "./components/Header";
import SearchPanel from "./components/searchPanel";
import Sort from "./components/sort";
import CardProducts from "./components/cardProducts";
import {InitialStateType, ProductCategoryType} from "./common/models";
import Categories from "./components/categories";

type AppProps = {
    initialState: InitialStateType[],
    productCategory: ProductCategoryType[]
}

const App = ({initialState, productCategory}: AppProps) => {

    const [state, setState] = useState<InitialStateType[]>(initialState)
    const [category, setCategory] = useState<ProductCategoryType[]>(productCategory)
    const [currentCategory, setCurrentCategory] = useState<string>('')

    // Установка категории
    const getCurrentCategory = (category: string) => {
        setCurrentCategory(category)
    }
    // Фильтрация по категориям
    const filteredProduct: InitialStateType[] = currentCategory
        ? state.filter((product) => product.category.name === currentCategory)
        : state

    // Живая фильтрация продуктов
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
        <div className='App'>
            <Header/>
            <div className='container'>
                <SearchPanel onSearch={getResultSearch}/>
                <div className="row">
                    <div className="col s4">
                        <Categories
                            productCategory={category}
                            getCurrentCategory={getCurrentCategory}/>
                    </div>
                    <div className="col s8">
                        <Sort
                            onSortProduct={sortProducts}/>
                        <CardProducts
                            state={filteredProduct}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
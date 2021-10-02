import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "../layouts/mainPage";
import LoginPage from "../layouts/loginPage";
import RegistrationPage from "../layouts/registrationPage";
import ProductPage from "../layouts/productPage";
import {InitialStateType, ProductCategoryType} from "../common/models";
import {initialState, productCategory} from "../database";

const Content = () => {
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
        const filteredProductsByName = saveState.filter(s => s.nameOfProduct.toLowerCase().includes(value))
        setState(filteredProductsByName)
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
        <div className='container'>
            <Switch>
                <Route path='/' exact render={() =>
                    <MainPage
                        onSearch={getResultSearch}
                        category={category}
                        onCurrentCategory={getCurrentCategory}
                        currentCategory={currentCategory}
                        onSortProduct={sortProducts}
                        filteredProduct={filteredProduct}/>}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/registration' component={RegistrationPage}/>
                <Route path='/product/:productId' render={() =>
                    <ProductPage
                        state={state}
                        onSearch={getResultSearch}
                        onCurrentCategory={getCurrentCategory}/>}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    );
};

export default Content;
import React from 'react';
import SearchPanel from "../components/searchPanel";
import Categories from "../components/categories";
import Sort from "../components/sort";
import CardProductsList from "../components/cardProductsList";
import {InitialStateType, ProductCategoryType} from "../common/models";

type MainPageType = {
    onSearch: (value: string) => void,
    category: ProductCategoryType[],
    onCurrentCategory: (category: string) => void,
    currentCategory: string,
    onSortProduct: (event: React.FormEvent<EventTarget>) => void,
    filteredProduct: InitialStateType[]
}

const MainPage = ({onSearch, category, onCurrentCategory, currentCategory, onSortProduct, filteredProduct}: MainPageType) => {

    return (
        <>
            <SearchPanel onSearch={onSearch}/>
            <div className="row">
                <div className="col s4">
                    <Categories
                        productCategory={category}
                        getCurrentCategory={onCurrentCategory}
                        currentCategory={currentCategory}/>
                </div>
                <div className="col s8">
                    <Sort
                        onSortProduct={onSortProduct}/>
                    <CardProductsList
                        state={filteredProduct}/>
                </div>
            </div>
        </>
    );
};

export default MainPage;
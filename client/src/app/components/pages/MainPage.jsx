import React, { useEffect, useState } from 'react';
import SearchPanel from "../common/SearchPanel";
import CategoryPanel from "../common/CategoryPanel";
import SortProducts from "../common/SortProducts";
import ProductCardList from "../common/ProductCardList";
import categoryService from "../../services/category.service";

const MainPage = () => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState('all')


    useEffect(() => {
        categoryService.fetchAll().then(res => setCategories(res))
    }, [])

    const setActiveCategory = (id) => {
        setCurrentCategory(id)
    }

    return (
        <div className="container">
            <SearchPanel />
            <div className="row">
                <div className="col l4">
                    <CategoryPanel
                        categories={categories}
                        currentCategory={currentCategory}
                        handleClick={setActiveCategory}
                    />
                </div>
                <div className="col offset-l1 l7">
                    <div className="row">
                        <SortProducts />
                    </div>
                    <div className="row">
                        <ProductCardList currentCategory={currentCategory}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
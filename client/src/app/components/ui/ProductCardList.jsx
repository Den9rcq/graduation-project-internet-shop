import React from 'react';
import ProductCardMain from "./ProductCardMain";
import { useSelector } from "react-redux";
import { getFilteredProducts, getSearchString, getSortStatus } from "../../store/productsSlice";
import { productSorting } from "../../utils/productSorting";

const ProductCardList = () => {
    const products = useSelector(getFilteredProducts)
    const sortStatus = useSelector(getSortStatus)
    const searchString = useSelector(getSearchString)

    const sortedProducts = productSorting(products, sortStatus)
    const foundProducts = sortedProducts.filter(product => product.name.toLowerCase().trim().includes(searchString))
    return (
        <>
            {foundProducts.length !== 0
                ? foundProducts.map(product => <ProductCardMain key={product._id} {...product} />)
                : <h3 className="px-1">Таких товаров нет</h3>}
        </>
    );
};

export default ProductCardList;
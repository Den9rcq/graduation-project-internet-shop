import React, { useEffect } from 'react';
import ProductCardMain from "./ProductCardMain";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getFilteredProducts, getSearchString, getSortStatus } from "../../store/productsSlice";
import { productSorting } from "../../utils/productSorting";

const ProductCardList = () => {
    const products = useSelector(getFilteredProducts)
    const sortStatus = useSelector(getSortStatus)
    const searchString = useSelector(getSearchString)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())

        // eslint-disable-next-line
    }, [])


    const sortedProducts = productSorting(products, sortStatus)
    const foundProducts = sortedProducts.filter(product => product.name.toLowerCase().trim().includes(searchString))
    return (
        <>
            {foundProducts.map(product => <ProductCardMain key={product._id} {...product} />)}
        </>
    );
};

export default ProductCardList;
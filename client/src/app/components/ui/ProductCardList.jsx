import React, { useEffect } from 'react';
import ProductCardMain from "./ProductCardMain";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    getFilteredProducts,
    getProductLoadingStatus,
    getSearchString,
    getSortStatus
} from "../../store/productsSlice";
import { productSorting } from "../../utils/productSorting";
import LoadingProgressBar from "./LoadingProgressBar";

const ProductCardList = () => {
    const products = useSelector(getFilteredProducts)
    const loadingStatusProducts = useSelector(getProductLoadingStatus())
    const sortStatus = useSelector(getSortStatus())
    const searchString = useSelector(getSearchString())
    const sortedProducts = productSorting(products, sortStatus)
    const foundProducts = sortedProducts.filter(product => product.name.toLowerCase().trim().includes(searchString))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (loadingStatusProducts === 'loading') {
        return <LoadingProgressBar />
    }

    return (
        <>
            {foundProducts.length !== 0
                ? foundProducts.map(product => <ProductCardMain key={product._id} {...product} />)
                : <h3 className="px-1">Таких товаров нет</h3>}
        </>
    );
};

export default ProductCardList;
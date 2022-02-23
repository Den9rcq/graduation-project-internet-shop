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
import usePagination from "../../hooks/usePagination";
import Pagination from "./Pagination";

const ProductCardList = () => {
    const products = useSelector(getFilteredProducts)
    const loadingStatusProducts = useSelector(getProductLoadingStatus())
    const sortStatus = useSelector(getSortStatus())
    const searchString = useSelector(getSearchString())
    const sortedProducts = productSorting(products, sortStatus)
    const foundProducts = sortedProducts.filter(product => product.name.toLowerCase().trim().includes(searchString))
    const dispatch = useDispatch()

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({ contentOnObjectPage: 3, numberOfPages: products.length });

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (loadingStatusProducts === 'loading') {
        return <LoadingProgressBar />
    }

    return (
        <>
            {foundProducts.length !== 0
                ? foundProducts
                    .slice(firstContentIndex, lastContentIndex)
                    .map(product => <ProductCardMain key={product._id} {...product} />)
                : <h3 className="px-1">Таких товаров нет</h3>}

            {<Pagination page={page} totalPages={totalPages} setPage={setPage} nextPage={nextPage} prevPage={prevPage} />}
        </>
    );
};

export default ProductCardList;
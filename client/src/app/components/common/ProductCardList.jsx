import React, { useEffect, useState } from 'react';
import productService from "../../services/product.service";
import ProductCardMain from "./ProductCardMain";

const ProductCardList = ({ currentCategory }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        productService.fetchAll().then(res => setProducts(res))
    }, [])

    const sortedProduct = currentCategory !== 'all' ? [...products].filter(product => product.category === currentCategory) : [...products]
    return (
        <>
            {sortedProduct.map(product => <ProductCardMain key={product._id} {...product} />)}
        </>
    );
};

export default ProductCardList;
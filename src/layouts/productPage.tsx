import React from 'react';
import {useParams} from 'react-router-dom';
import {InitialStateType} from "../common/models";
import CardProduct from "../components/cardProduct";
import Breadcrumbs from "../components/breadcrumbs";
import SearchPanel from "../components/searchPanel";

type ProductPageType = {
    state: InitialStateType[],
    onSearch: (value: string) => void,
}

const ProductPage = ({state, onSearch}: ProductPageType) => {
    const {productId} = useParams<{ productId: string }>();
    const currentProduct: InitialStateType | undefined = state.find(product => product._id === productId);

    return (
        <>
            {currentProduct

                ? <>
                    <SearchPanel onSearch={onSearch}/>
                    <Breadcrumbs product={currentProduct}/>
                    <CardProduct product={currentProduct}/>
                </>
                : <h2>Такого товара нет</h2>}
        </>
    );
};

export default ProductPage;
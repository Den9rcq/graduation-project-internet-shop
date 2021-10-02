import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {InitialStateType} from "../common/models";
import {initialState} from "../database";
import CardProduct from "../components/cardProduct";
import Breadcrumbs from "../components/breadcrumbs";

const ProductPage = () => {
    const [state] = useState<InitialStateType[]>(initialState)
    const {productId} = useParams<{ productId: string }>();
    const currentProduct: InitialStateType | undefined = state.find(product => product._id === productId);
    return (
        <>
            {currentProduct

                ? <>
                    <Breadcrumbs product={currentProduct}/>
                    <CardProduct product={currentProduct}/>
                </>
                : <h2>Такого товара нет</h2>}
        </>
    );
};

export default ProductPage;
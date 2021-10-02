import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {InitialStateType} from "../common/models";
import {initialState} from "../database";
import CardProduct from "../components/cardProduct";

const ProductPage = () => {
    const [state] = useState<InitialStateType[]>(initialState)
    const {productId} = useParams<{ productId: string }>();
    const currentProduct: InitialStateType | undefined = state.find(product => product._id === productId);
    return (
        <>
            {currentProduct

                ? <>
                    <nav>
                        <div className="nav-wrapper">
                            <div className="col s12">
                                <Link to='/' className="breadcrumb">Главная</Link>
                                <Link to='/' className="breadcrumb">{currentProduct.category.name}</Link>
                                <Link to={`/product/${currentProduct._id}`} className="breadcrumb">{currentProduct.nameOfProduct}</Link>
                            </div>
                        </div>
                    </nav>
                    <CardProduct product={currentProduct}/>
                </>
                : <h2>Такого товара нет</h2>}
        </>
    );
};

export default ProductPage;
import React from 'react';
import {Link} from "react-router-dom";
import {InitialStateType} from "../common/models";

const Breadcrumbs = ({product}: {product: InitialStateType}) => {
    return (
        <nav>
            <div className="nav-wrapper mt-5 px-1">
                <div className="col s12">
                    <Link to='/' className="breadcrumb">Главная</Link>
                    <Link to='/' className="breadcrumb">{product.category.name}</Link>
                    <Link to={`/product/${product._id}`} className="breadcrumb">{product.nameOfProduct}</Link>
                </div>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
import React from 'react';
import {Link} from "react-router-dom";
import {InitialStateType} from "../common/models";

type BreadcrumbsType = {
    product: InitialStateType,
    onCurrentCategory: (category: string) => void
}

const Breadcrumbs = ({product, onCurrentCategory}: BreadcrumbsType) => {
    return (
        <nav>
            <div className="nav-wrapper mt-1 px-1">
                <ul className="col s12">
                    <li onClick={() => onCurrentCategory('')}>
                        <Link to='/' className="breadcrumb">Главная</Link>
                    </li>
                    <li onClick={() => onCurrentCategory(product.category.name)}>
                        <Link to='/'
                              className="breadcrumb">{product.category.name}
                        </Link>
                    </li>
                    <li>
                        <Link to={`/product/${product._id}`} className="breadcrumb">{product.nameOfProduct}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
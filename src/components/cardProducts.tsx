import React from 'react';
import Pagination from "./pagination";
import CardProduct from "./cardProduct";
import {InitialStateType} from "../common/models";


const CardProducts = ({state}: {state: InitialStateType[]}) => {
    return (
        <div className="col s10">
            {state.map((product: InitialStateType) => <CardProduct key={product._id}
                                                                   product={product}/>)}
            <Pagination/>
        </div>
    );
};

export default CardProducts;
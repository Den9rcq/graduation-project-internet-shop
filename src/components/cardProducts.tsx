import React from 'react';
import CardProduct from "./cardProduct";
import {InitialStateType} from "../common/models";


const CardProducts = ({state}: {state: InitialStateType[]}) => {
    return (
        <div className="col s12">
            {state.map((product: InitialStateType) => <CardProduct key={product._id}
                                                                   product={product}/>)}
        </div>
    );
};

export default CardProducts;
import React from 'react';
import CardProductMain from "./cardProductMain";
import {InitialStateType} from "../common/models";


const CardProductsList = ({state}: {state: InitialStateType[]}) => {
    return (
        <div className="col s12">
            {state.map((product: InitialStateType) => <CardProductMain key={product._id}
                                                                       product={product}/>)}
        </div>
    );
};

export default CardProductsList;
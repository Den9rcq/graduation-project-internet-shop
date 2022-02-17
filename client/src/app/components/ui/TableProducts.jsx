import React from 'react';
import { useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import TableBody from "./TableBody";

const TableProducts = () => {
    const product = useSelector(getProducts)

    return (
        <table className="striped centered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Категории</th>
                <th>Стоимость</th>
                <th>Кол-во</th>
                <th>Действия</th>
            </tr>
            </thead>

            <tbody>
            {product.map(product => <TableBody key={product._id} {...product}/>)}
            </tbody>
        </table>
    );
};

export default TableProducts;
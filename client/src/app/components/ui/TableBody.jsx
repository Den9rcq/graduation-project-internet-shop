import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesLoadingStatus, getCategoryById } from "../../store/categoriesSlice";
import { removeProduct, selectedProductInstalled } from "../../store/productsSlice";
import { removeProductToCart } from "../../store/cartSlice";

const TableBody = ({ _id, name, price, quantity, category}) => {
    const categories = useSelector(getCategoryById(category))
    const dispatch = useDispatch()

    const onEditProduct = (id) => {
        dispatch(selectedProductInstalled(id))
    }

    const onRemoveProduct = (id) => {
        dispatch(removeProduct(id))
        dispatch(removeProductToCart(id))
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{categories?.label}</td>
            <td>{price}₽</td>
            <td>{quantity}</td>
            <td className="flex-evenly">
                <button className="waves-effect waves-light btn-small blue darken-4"
                        onClick={() =>onEditProduct(_id)}>
                    <i className="material-icons center">edit</i>
                </button>
                <button className="waves-effect waves-light btn-small red darken-4"
                        onClick={() =>onRemoveProduct(_id)}>
                    <i className="material-icons center">delete_forever</i>
                </button>
            </td>
        </tr>
    );
};

export default TableBody;
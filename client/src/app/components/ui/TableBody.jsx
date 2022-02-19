import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../../store/categoriesSlice";
import { removeProduct, selectedProductInstalled } from "../../store/productsSlice";

const TableBody = ({ _id, name, price, quantity, category}) => {
    const { label: labelCategory } = useSelector(getCategoryById(category))
    const dispatch = useDispatch()

    const onEditProduct = () => {
        dispatch(selectedProductInstalled(_id))
    }

    const onRemoveProduct = () => {
        dispatch(removeProduct(_id))
    }

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{labelCategory}</td>
            <td>{price}₽</td>
            <td>{quantity}</td>
            <td className="flex-evenly">
                <button className="waves-effect waves-light btn-small blue darken-4"
                        onClick={onEditProduct}>
                    <i className="material-icons center">edit</i>
                </button>
                <button className="waves-effect waves-light btn-small red darken-4"
                        onClick={onRemoveProduct}>
                    <i className="material-icons center">delete_forever</i>
                </button>
            </td>
        </tr>
    );
};

export default TableBody;
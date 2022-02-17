import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../../store/categoriesSlice";
import { selectedProductInstalled } from "../../store/productsSlice";

const TableBody = ({ _id, name, price, quantity, category, img }) => {
    const { label: labelCategory } = useSelector(getCategoryById(category))
    const dispatch = useDispatch()

    const onEditProduct = () => {
        dispatch(selectedProductInstalled(_id))
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
                <button className="waves-effect waves-light btn-small red darken-4">
                    <i className="material-icons center">delete_forever</i>
                </button>
            </td>
        </tr>
    );
};

export default TableBody;
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSortStatus, sortStatusChanged } from "../../store/productsSlice";

const SortProducts = () => {
    const sortStatus = useSelector(getSortStatus)
    const dispatch = useDispatch()

    const onStatusChange = ({ target }) => {
        if (target.name === sortStatus || target.parentNode.name === sortStatus) return

        if (!target.name) {
            dispatch(sortStatusChanged(target.parentNode.name))
        } else {
            dispatch(sortStatusChanged(target.name))
        }
    }

    return (
        <div className='col'>
            <button
                name='popular'
                className="waves-effect red accent-1 btn-small"
                onClick={(e) => onStatusChange(e)}>
                По популярности<i className="material-icons left">star</i>
            </button>
            <button
                name='highToLow'
                className="waves-effect red accent-1 btn-small"
                onClick={(e) => onStatusChange(e)}>
                <i className="material-icons left">sort</i>по возростанию
            </button>
            <button
                name='lowToHigh'
                className="waves-effect red accent-1 btn-small"
                onClick={(e) => onStatusChange(e)}>
                <i className="material-icons left revers-sort">sort</i> по убыванию
            </button>
        </div>
    );
};

export default SortProducts;
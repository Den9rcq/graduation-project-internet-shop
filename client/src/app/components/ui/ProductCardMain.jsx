import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductCardMain = ({ name, _id, price, img }) => {
    return (
        <div className='card horizontal card-main'>
            <div className='card-image'>
                <img alt={name}
                    src={img} />
            </div>
            <div className='card-stacked'>
                <div className='card-content'>
                    <p className='card-content__header'>{name}</p>
                    <p className='card-content__content'>{`ID Товара: ${_id}`}</p>
                    <p className='card-content__price'>{`Цена: ${price}₽`}</p>
                </div>
                <div className='card-action'>
                    <Link to={`/product/${_id}`}>Открыть карточку</Link>
                </div>
            </div>
        </div>
    )
}

ProductCardMain.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string
}

export default ProductCardMain

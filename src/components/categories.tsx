import React from 'react';

const Categories = () => {

    const addActiveClass = (e: React.MouseEvent) => {
        console.log(e.target)
    }

    return (
        <div className="categories collection">
            <h3 className='center'>Категории</h3>
            <a href="#!" className="collection-item active">Всё</a>
            <a href="#!" className="collection-item">Телефоны</a>
            <a href="#!" className="collection-item">Планшеты</a>
            <a href="#!" className="collection-item">Ноутбуки</a>
            <a href="#!" className="collection-item">Компьютеры</a>
            <a href="#!" className="collection-item">Часы</a>
            <a href="#!" className="collection-item">Наушники</a>
            <a href="#!" className="collection-item">ТВ приставки</a>
            <a href="#!" className="collection-item">Дисплеи</a>
        </div>
    );
};

export default Categories;
import React from 'react';
import { Link } from "react-router-dom";

const OrderPage = () => {
    return (
        <div className="flex-center mt-7">
            <h4>Это не настоящая страница оплаты.</h4>
            <h5>Сайт создан для демонстрации кода</h5>
            <a
                className="btn red mt-2 mb-2"
                href="https://github.com/Den9rcq/graduation-project-internet-shop">ссылка проекта на GitHub</a>
            <Link to='/'> <span className="btn blue">вернуться на главную </span></Link>
        </div>
    );
};

export default OrderPage;
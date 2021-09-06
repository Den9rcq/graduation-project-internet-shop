import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './index.css';
import {InitialStateType} from "./common/models";


const initialState: InitialStateType[] = [
    {
        _id: '1',
        nameOfProduct: 'iPhone 2g',
        category: ['phone'],
        price: 20,
        img: 'https://podberi-sotik.ru/aimg/content/7961a43edab8020aa12d080795142dfcf62de959.jpg',
        quantity: 10,
        popular: 2
    },
    {
        _id: '2',
        nameOfProduct: 'iPhone 4s',
        category: ['phone'],
        price: 40,
        img: 'https://i2.stat01.com/1/5318/53170918/afacdb/apple-iphone-4s-16gb-chernyj.jpg',
        quantity: 7,
        popular: 4
    },
    {
        _id: '3',
        nameOfProduct: 'iPhone 7',
        category: ['phone'],
        price: 60,
        img: 'https://akket.com/wp-content/uploads/2017/06/Apple-iPhone-7-Plus-Russia-Price-3.jpg',
        quantity: 14,
        popular: 6
    },
    {
        _id: '4',
        nameOfProduct: 'iPhone X',
        category: ['phone'],
        price: 80,
        img: 'https://www.ixbt.com/short/images/2018/Jan/iphonex-spgry-pureangles_gb-en-screen_1.jpg',
        quantity: 22,
        popular: 16
    },
    {
        _id: '5',
        nameOfProduct: 'iPhone 11',
        category: ['phone'],
        price: 100,
        img: 'https://shop.mts.ru/upload/iblock/0ab/iPhone_11_P_6.jpg',
        quantity: 12,
        popular: 45
    },
    {
        _id: '6',
        nameOfProduct: 'iPhone 12 mini',
        category: ['phone'],
        price: 120,
        img: 'https://telefonplus.ru/wp-content/uploads/2020/11/12-mini.jpg',
        quantity: 15,
        popular: 15
    },
    {
        _id: '7',
        nameOfProduct: 'iPhone 12 Pro Max',
        category: ['phone'],
        price: 160,
        img: 'https://i.ytimg.com/vi/54Fp21DUmrw/maxresdefault.jpg',
        quantity: 31,
        popular: 22
    },

]

ReactDOM.render(
    <React.StrictMode>
        <App initialState={initialState}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

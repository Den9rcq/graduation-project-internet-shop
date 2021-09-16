import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './index.css';
import {ProductCategoryType, InitialStateType} from "./common/models";

const productCategory: ProductCategoryType[] = [
    {_id: '1', name: 'Телефоны'},
    {_id: '2', name: 'Планшеты'},
    {_id: '3', name: 'Ноутбуки'},
    {_id: '4', name: 'Компьютеры'},
    {_id: '5', name: 'Часы'},
    {_id: '6', name: 'Наушники'},
    {_id: '7', name: 'ТВ приставки'},
    {_id: '8', name: 'Дисплеи'}
]
const initialState: InitialStateType[] = [
    {
        _id: '6',
        nameOfProduct: 'iPhone 12 mini',
        category: productCategory[0],
        price: 69990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-select-2021?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1617130318000',
        quantity: 15,
        popular: 15
    }, {
        _id: '9',
        nameOfProduct: 'MacBook Pro 13\'',
        category: productCategory[2],
        price: 129990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-pro-13-202108_GEO_RU?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1626383418000',
        quantity: 15,
        popular: 9
    }, {
        _id: '22',
        nameOfProduct: 'AirPods',
        category: productCategory[5],
        price: 19900,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-wireless-charge-case-201910?wid=300&hei=390&fmt=png-alpha&.v=1570816694068',
        quantity: 75,
        popular: 80
    }, {
        _id: '3',
        nameOfProduct: 'iPhone SE',
        category: productCategory[0],
        price: 39990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-family-select-2020?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1586794486444',
        quantity: 14,
        popular: 6
    }, {
        _id: '5',
        nameOfProduct: 'iPhone 11',
        category: productCategory[0],
        price: 54990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022219953',
        quantity: 12,
        popular: 45
    }, {
        _id: '1',
        nameOfProduct: 'iPhone XR',
        category: productCategory[0],
        price: 47990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1550795424612',
        quantity: 10,
        popular: 2
    }, {
        _id: '4',
        nameOfProduct: 'iPhone 12',
        category: productCategory[0],
        price: 79990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-select-2021?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1617130318000',
        quantity: 22,
        popular: 16
    }, {
        _id: '2',
        nameOfProduct: 'iPhone 12 Pro',
        category: productCategory[0],
        price: 99990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero-all?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021662000',
        quantity: 7,
        popular: 4
    }, {
        _id: '7',
        nameOfProduct: 'iPhone 12 Pro Max',
        category: productCategory[0],
        price: 109990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-family-hero-all?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000',
        quantity: 31,
        popular: 22
    }, {
        _id: '8',
        nameOfProduct: 'MacBook Air M1',
        category: productCategory[2],
        price: 99990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202108?wid=980&hei=1000&fmt=p-jpg&qlt=95&.v=1625871034000',
        quantity: 10,
        popular: 2
    }, {
        _id: '10',
        nameOfProduct: 'MacBook Pro 16\'',
        category: productCategory[2],
        price: 234990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-pro-16-202108_GEO_RU?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1626385833000',
        quantity: 5,
        popular: 4
    }, {
        _id: '11',
        nameOfProduct: 'iMac 27\'',
        category: productCategory[3],
        price: 188990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-imac-27-202108?wid=1050&hei=1000&fmt=p-jpg&qlt=95&.v=1626106575000',
        quantity: 4,
        popular: 9
    }, {
        _id: '12',
        nameOfProduct: 'Mac mini',
        category: productCategory[3],
        price: 74990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-mac-mini-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1626106830000',
        quantity: 13,
        popular: 21
    }, {
        _id: '13',
        nameOfProduct: 'Mac Pro',
        category: productCategory[3],
        price: 621990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-mac-pro-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1625864628000',
        quantity: 2,
        popular: 1
    }, {
        _id: '14',
        nameOfProduct: 'Монитор Pro Display XDR',
        category: productCategory[7],
        price: 379990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-mac-pro-display-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1625864626000',
        quantity: 2,
        popular: 1
    }, {
        _id: '15',
        nameOfProduct: 'iPad Pro',
        category: productCategory[1],
        price: 79990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-40-pro-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627413382000',
        quantity: 10,
        popular: 7
    }, {
        _id: '16',
        nameOfProduct: 'iPad Air',
        category: productCategory[1],
        price: 55990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-40-air-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627413381000',
        quantity: 15,
        popular: 9
    }, {
        _id: '17',
        nameOfProduct: 'iPad',
        category: productCategory[1],
        price: 29990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-40-ipad-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627413381000',
        quantity: 30,
        popular: 25
    }, {
        _id: '18',
        nameOfProduct: 'iPad mini',
        category: productCategory[1],
        price: 47990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1630457637000',
        quantity: 12,
        popular: 17
    }, {
        _id: '19',
        nameOfProduct: 'Apple Watch Series 6',
        category: productCategory[4],
        price: 36990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-aws6-202108_GEO_RU?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1626487486000',
        quantity: 18,
        popular: 29
    }, {
        _id: '20',
        nameOfProduct: 'Apple Watch SE',
        category: productCategory[4],
        price: 24990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-awse-202108_GEO_IE_GEO_RU?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1626487546000',
        quantity: 54,
        popular: 42
    }, {
        _id: '21',
        nameOfProduct: 'Apple Watch Series 3',
        category: productCategory[4],
        price: 17990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-aws3-202108_GEO_RU?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1626487412000',
        quantity: 32,
        popular: 24
    }, {
        _id: '23',
        nameOfProduct: 'AirPods Pro',
        category: productCategory[5],
        price: 24900,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
        quantity: 50,
        popular: 46
    }, {
        _id: '24',
        nameOfProduct: 'AirPods Max',
        category: productCategory[5],
        price: 62900,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604709293000',
        quantity: 10,
        popular: 16
    }, {
        _id: '25',
        nameOfProduct: 'Apple TV 4K',
        category: productCategory[6],
        price: 16990,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1619139498000',
        quantity: 10,
        popular: 25
    },

]

ReactDOM.render(
    <React.StrictMode>
        <App initialState={initialState} productCategory={productCategory}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

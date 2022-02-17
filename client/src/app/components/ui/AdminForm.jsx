import React from 'react';
import { Formik, Form } from "formik";
import TextInput from "../common/formField/TextInput";
import Select from "../common/formField/Select";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import * as Yup from "yup"
import { getProductById, getSelectedProduct, selectedProductInstalled } from "../../store/productsSlice";

const AdminForm = () => {
    const categories = useSelector(getCategories)
    const selectedProduct = useSelector(getSelectedProduct)
    const variableProduct = useSelector(getProductById(selectedProduct))
    const dispatch = useDispatch()

    const fields = variableProduct
        ? {
            name: variableProduct.name,
            category: variableProduct.category,
            price: variableProduct.price,
            quantity: variableProduct.quantity,
            img: variableProduct.img
        }
        : {
            name: '',
            category: '',
            price: '',
            quantity: '',
            img: ''
        }

    const addingOrChangingSchema = Yup.object({
        name: Yup.string()
                 .required('Обязательное поле для заполнения')
                 .min(5, 'Не менее пяти символов'),
        category: Yup.string().required('Обязательно выберите категорию'),
        price: Yup.number()
                  .required('Обязательно установите цену')
                  .typeError('Цена должна быть числом')
                  .min(1000, 'Минимум 1000 рублей'),
        quantity: Yup.number()
                     .required('Обязательно укажите количество товаров')
                     .typeError('Количество должно быть числом')
                     .min(10, 'Минимум 10 штук'),
        img: Yup.string().url('Картинка должна быть в формате URL')
    })

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        let product;
        if (!variableProduct) {
            product = !values.img
                ? { ...values, img: 'https://zenit.by/images/no_photo.png' }
                : values
            console.log(product)
            resetForm()
            setSubmitting(false)
        } else {
            product = !values.img
                ? { ...values, img: 'https://zenit.by/images/no_photo.png', _id: variableProduct._id }
                : {...values, _id: variableProduct._id}
            console.log(product)
            dispatch(selectedProductInstalled(null))
            setSubmitting(false)
        }
    }

    return (
        <Formik
            initialValues={fields}
            enableReinitialize={true}
            validationSchema={addingOrChangingSchema}
            onSubmit={handleSubmit}
        >{({ isValid, dirty, isSubmitting }) => (
            <Form>
                <div className="row">
                    <div className="input-field col l11">
                        <TextInput className="validate mb-1"
                                   icon="article"
                                   label="Название товара"
                                   name="name"
                                   id="name"
                                   type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col l10 offset-l1 mb-1">
                        <Select className="browser-default" name="category">
                            {categories.map(category => category.name === 'all'
                                ? <option key={category._id} value="" disabled>Выберите категорию</option>
                                : <option key={category._id} value={category._id}>{category.label}</option>)}
                        </Select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col l11 mb-1">
                        <TextInput className="validate mb-1"
                                   icon="currency_ruble"
                                   label="Цена товара"
                                   name="price"
                                   id="price"
                                   type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col l11 mb-1">
                        <TextInput className="validate mb-1"
                                   icon="production_quantity_limits"
                                   label="Количество"
                                   name="quantity"
                                   id="quantity"
                                   type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col l11 mb-1">
                        <TextInput className="validate"
                                   icon="link"
                                   label="URL (картинка)"
                                   name="img"
                                   id="img"
                                   type="text" />
                    </div>
                </div>
                <div className="flex-center">
                    {!variableProduct
                        ? <button className="waves-effect waves-light btn-large red darken-4 mb-1"
                                  type="submit"
                                  disabled={!(isValid && dirty) || isSubmitting}
                                  name="action"
                        >
                            Добавить товар
                            <i className="material-icons right">add_box</i>
                        </button>
                        : <div className="flex-center">
                            <button
                                className="waves-effect waves-light btn-small blue darken-4 mb-1"
                                type="submit"
                                disabled={!(isValid && dirty) || isSubmitting}
                                name="action"
                            >
                                Изменить товар
                                <i className="material-icons right">edit</i>
                            </button>
                            <button
                                className="waves-effect waves-light btn-small red darken-4 mb-1"
                                type="submit"
                                name="action"
                                onClick={() => dispatch(selectedProductInstalled(null))}
                            >
                                Отмена
                                <i className="material-icons right">backspace</i>
                            </button>
                        </div>}
                </div>
            </Form>
        )}
        </Formik>
    );
};

export default AdminForm;
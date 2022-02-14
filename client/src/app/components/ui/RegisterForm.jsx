import React from 'react';
import { Form, Formik } from 'formik'
import TextInput from "../common/formField/TextInput";
import Select from "../common/formField/Select";
import Checkbox from "../common/formField/Checkbox";
import * as Yup from "yup"
import "yup-phone";


const RegisterForm = () => {
    const fields = {
        name: '',
        phone: '',
        email: '',
        password: '',
        sex: '',
        admin: false
    }


    const SignupSchema = Yup.object({
        name: Yup.string()
                 .required('Обязательное поле для заполнения')
                 .min(2, 'Не менее двух символов'),
        phone: Yup.string()
                  .required('Номер телефона обязателен')
                  .phone('+7', false, 'Введите корректный номер телефона +7'),
        email: Yup.string()
                  .required('Обязательное поле для заполнения')
                  .email('Неправильно введён email'),
        password: Yup.string()
                     .required('Обязательное поле')
                     .min(8, 'Пароль должен содержать минимум 8 символов')
                     .matches(RegExp('(.*[a-z].*)'), 'Пароль должен содержать хотя бы один символ в нижнем регистре')
                     .matches(RegExp('(.*[A-Z].*)'), 'Пароль должен содержать хотя бы один символ в верхнем регистре')
                     .matches(RegExp('(.*\\d.*)'), 'Пароль должен содержать хотя бы одну цифру'),
        sex: Yup.string().required('Обязательно укажите пол')
    })

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values)
        resetForm()
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={fields}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty, isSubmitting }) => (
                <Form className="col l8  offset-l2">
                    <div className="row">
                        <div className="input-field col l6">
                            <TextInput label="Введите ваше имя"
                                       className="validate"
                                       icon="account_circle"
                                       id="name"
                                       name="name"
                                       type="text" />
                        </div>
                        <div className="input-field col l6">
                            <TextInput label="Номер телефона"
                                       className="validate"
                                       icon="phone"
                                       id="phone"
                                       name="phone"
                                       type="tel" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col l6">
                            <TextInput label="Ваша почта" icon="email" name="email" type="email" />
                        </div>
                        <div className="input-field col l6">
                            <TextInput label="Ваш пароль" icon="password" name="password" type="password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col l6">
                            <Select className="browser-default" name="sex" id="sex">
                                <option value="" disabled>Выберите пол</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Select>
                        </div>
                        <div className="input-field col l3">
                            <Checkbox name="admin">
                                <span>Admin</span>
                            </Checkbox>
                        </div>
                        <div className="input-field col l3">
                            <button
                                className="btn waves-effect waves-light red darken-4"
                                type="submit"
                                name="action"
                                disabled={!(isValid && dirty) || isSubmitting}
                            >
                                Registration<i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
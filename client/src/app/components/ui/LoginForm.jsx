import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../common/formField/TextInput";

const LoginForm = () => {
    const fields = {
        email: '',
        password: ''
    }

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
                  .email('Неправильный email')
                  .required('Обязательное поле'),
        password: Yup.string()
                     .required('Обязательное поле')
                     .min(8, 'Пароль должен содержать минимум 8 символов')
                     .matches(RegExp('(.*[a-z].*)'), 'Пароль должен содержать хотя бы один символ в нижнем регистре')
                     .matches(RegExp('(.*[A-Z].*)'), 'Пароль должен содержать хотя бы один символ в верхнем регистре')
                     .matches(RegExp('(.*\\d.*)'), 'Пароль должен содержать хотя бы одну цифру')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values)
        resetForm()
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={fields}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >{({ isValid, dirty, isSubmitting }) => (
            <Form className="col l12">
                <div className="row">
                    <div className="input-field col l6 offset-l3">
                        <TextInput label="Ваша почта" icon="email" name="email" type="email" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col l6 offset-l3">
                        <TextInput label="Ваш пароль" icon="password" name="password" type="password" />
                    </div>
                </div>
                <div className="flex-center">
                    <button
                        className="waves-effect waves-light btn-large red darken-4 mb-1"
                        type="submit"
                        disabled={!(isValid && dirty) || isSubmitting}
                        name="action"
                    >
                        Log In
                        <i className="material-icons right">login</i>
                    </button>
                </div>
            </Form>
        )}
        </Formik>
    );
};

export default LoginForm;
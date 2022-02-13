import React, { useState } from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../common/formField/TextInput";


const LoginForm = () => {
    const fields = {
        email: '',
        password: ''
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
                  .email('Неправильный email')
                  .required('Обязательное поле'),
        password: Yup.string()
                     .required('Required')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(JSON.stringify(values, null, 2))
        resetForm()
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={fields}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >{({ isValid, dirty, isSubmitting }) => (
            <Form className="col l12">
                <div className="row">
                    <div className="input-field col l8 offset-l2">
                        <TextInput label="Ваша почта" icon="email" name="email" type="email" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col l8 offset-l2">
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
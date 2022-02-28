import React from 'react'
import { Form, Formik } from 'formik'
import TextInput from '../common/formField/TextInput'
import Select from '../common/formField/Select'
import Checkbox from '../common/formField/Checkbox'
import { registerFields, SignupSchema } from '../../helpers/form.helpers'
import { useDispatch } from 'react-redux'
import { signUpAuth } from '../../store/authSlice'

const RegisterForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async(values, { setSubmitting, resetForm }) => {
        dispatch(signUpAuth(values))
        resetForm()
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={registerFields}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty, isSubmitting }) => (
                <Form className='col l8  offset-l2'>
                    <div className='row'>
                        <div className='input-field col l6'>
                            <TextInput label='Введите ваше имя'
                                className='validate'
                                icon='account_circle'
                                name='name'
                                type='text' />
                        </div>
                        <div className='input-field col l6'>
                            <TextInput label='Номер телефона'
                                className='validate'
                                icon='phone'
                                name='phone'
                                type='tel' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field col l6'>
                            <TextInput label='Ваша почта' icon='email' name='email' type='email' />
                        </div>
                        <div className='input-field col l6'>
                            <TextInput label='Ваш пароль' icon='password' name='password' type='password' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col l6'>
                            <Select className='browser-default' name='sex'>
                                <option value='' disabled>Выберите пол</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </Select>
                        </div>
                        <div className='input-field col l3'>
                            <Checkbox name='admin'>
                                <span>Admin</span>
                            </Checkbox>
                        </div>
                        <div className='input-field col l3'>
                            <button
                                className='btn waves-effect waves-light red darken-4'
                                type='submit'
                                name='action'
                                disabled={!(isValid && dirty) || isSubmitting}
                            >
                                Registration<i className='material-icons right'>send</i>
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm

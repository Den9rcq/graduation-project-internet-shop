import React from 'react'
import { Formik, Form } from 'formik'
import TextInput from '../common/formField/TextInput'
import { loginFields, LoginSchema } from '../../helpers/form.helpers'
import { useDispatch } from 'react-redux'
import { signInAuth } from '../../store/authSlice'

const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async(values, { setSubmitting, resetForm }) => {
        dispatch(signInAuth(values))
        resetForm()
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={loginFields}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >{({ isValid, dirty, isSubmitting }) => (
                <Form className='col l12'>
                    <div className='row'>
                        <div className='input-field col l6 offset-l3'>
                            <TextInput label='Ваша почта' icon='email' name='email' type='email' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col l6 offset-l3'>
                            <TextInput label='Ваш пароль' icon='password' name='password' type='password' />
                        </div>
                    </div>
                    <div className='flex-center'>
                        <button
                            className='waves-effect waves-light btn-large red darken-4 mb-1'
                            type='submit'
                            disabled={!(isValid && dirty) || isSubmitting}
                            name='action'
                        >
                        Log In
                            <i className='material-icons right'>login</i>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm

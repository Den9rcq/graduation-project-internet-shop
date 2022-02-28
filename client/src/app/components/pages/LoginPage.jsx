import LoginForm from '../ui/LoginForm'
import { Link } from 'react-router-dom'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='row container mt-7'>
            <h3 className='center-align mb-3'>Log In</h3>
            <LoginForm />
            <div className='center-align'>
                <Link
                    className='btn red waves-effect waves-light darken-4'
                    to='/registration'>
                    Registration
                    <i className='material-icons right'>person_add</i>
                </Link>
            </div>
        </div>
    )
}

export default LoginPage

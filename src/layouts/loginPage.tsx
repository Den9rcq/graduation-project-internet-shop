import React from 'react';

const LoginPage = () => {
    return (
        <div className="row mt-5">
            <form className="col s12">
                <div className="row">
                    <h3 className="center-align">Вход</h3>
                    <div className="input-field col s6 offset-s3 mt-3">
                        <i className="material-icons prefix">person</i>
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6 offset-s3 mt-1">
                        <i className="material-icons prefix">password</i>
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row mt-2">
                    <button
                        className="btn waves-effect red accent-1 col s4 offset-s4"
                        type="submit"
                        name="action">Войти
                        <i className="material-icons right">login</i>
                    </button>
                    <a className="waves-effect red accent-1 btn col s4 offset-s4 mt-1">
                        <i className="material-icons right">app_registration</i>
                        Регистрация
                    </a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
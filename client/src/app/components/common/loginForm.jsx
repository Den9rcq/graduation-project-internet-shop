import React from 'react';

const LoginForm = () => {
    return (
        <div className="row container mt-3">
            <form className="col l8  offset-l2">
                <p className="flow-text center-align mb-3"><h3>Log In</h3></p>
                <div className="row">
                    <div className="input-field col l6 offset-l3">
                        <i className="material-icons prefix">email</i>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col l6 offset-l3">
                        <i className="material-icons prefix">password</i>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="validate" />
                        <label htmlFor="name">Password</label>
                    </div>
                </div>
                <div className="flex-center">
                    <button
                        className="waves-effect waves-light btn-large red darken-4 mb-1"
                        type="submit"
                        name="action">
                        Log In
                        <i className="material-icons right">login</i>
                    </button>
                    <a
                        className="btn red waves-effect waves-light darken-4"
                        href="">
                        Registration
                        <i className="material-icons right">person_add</i>
                    </a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
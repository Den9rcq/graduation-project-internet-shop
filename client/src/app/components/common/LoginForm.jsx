import React from 'react';

const LoginForm = () => {
    return (
            <form className="col l12">
                <p className="flow-text center-align mb-3"><h3>Log In</h3></p>
                <div className="row">
                    <div className="input-field col l8 offset-l2">
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
                    <div className="input-field col l8 offset-l2">
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
                </div>
            </form>
    );
};

export default LoginForm;
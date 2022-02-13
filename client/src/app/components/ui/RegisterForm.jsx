import React from 'react';

const RegisterForm = () => {
    return (
        <form className="col l8  offset-l2">
            <div className="row">
                <div className="input-field col l6">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="validate" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col l6">
                    <i className="material-icons prefix">phone</i>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="validate" />
                    <label htmlFor="icon_telephone">Telephone</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col l6">
                    <i className="material-icons prefix">email</i>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col l6">
                    <i className="material-icons prefix">password</i>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="validate" />
                    <label htmlFor="name">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col l6">
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="input-field col l3">
                    <label>
                        <input type="checkbox" />
                        <span>Admin</span>
                    </label>
                </div>
                <div className="input-field col l3">
                    <button
                        className="btn waves-effect waves-light red darken-4"
                        type="submit"
                        name="action">
                        Registration<i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
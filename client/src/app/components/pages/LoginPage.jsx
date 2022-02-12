import LoginForm from "../common/LoginForm";
import { Link } from "react-router-dom";
import React from "react";

const LoginPage = () => {
    return (
        <div className="row container mt-3">
            <LoginForm />
            <div className="center-align">
                <Link
                    className="btn red waves-effect waves-light darken-4"
                    to="/registration">
                    Registration
                    <i className="material-icons right">person_add</i>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
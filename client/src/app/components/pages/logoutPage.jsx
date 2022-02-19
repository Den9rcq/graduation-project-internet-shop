import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { logOut } from "../../store/authSlice";
import { useHistory } from "react-router-dom";

const LogoutPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(logOut())
        history.push("/");
    },[])

    return (
        <div>
            <h2>Loading</h2>
        </div>
    );
};

export default LogoutPage;
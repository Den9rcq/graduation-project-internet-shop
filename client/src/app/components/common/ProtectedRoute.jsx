import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAdmin } from "../../store/authSlice";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isAdmin = useSelector(getAdmin())
    return (
        <>
            <Route {...rest}
                   render={props => {
                       if (!isAdmin) {
                           return (
                               <Redirect to={{
                                   pathname: "/"
                               }}/>
                           );
                       }
                       return Component ? <Component {...props}/> : children;
                   }}
            />
        </>
    );
};

export default ProtectedRoute
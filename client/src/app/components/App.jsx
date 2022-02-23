import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { BasketPage, LoginPage, MainPage, ProductPage, RegistrationPage } from "./pages";
import NavBar from "./ui/NavBar";
import AdminPanelPage from "./pages/AdminPanelPage";
import LogoutPage from "./pages/LogoutPage";
import AppLoader from "./hoc/AppLoader";
import React from "react";

function App() {
    return (
        <Router>
            <>
                <AppLoader>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/product/:productId" component={ProductPage} />
                        <Route path="/basket/:userId" component={BasketPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/registration" component={RegistrationPage} />
                        <Route path="/admin-panel" component={AdminPanelPage} />
                        <Route path="/logout" component={LogoutPage} />
                        <Redirect to='/' />
                    </Switch>
                </AppLoader>
            </>
        </Router>
    )
}

export default App;

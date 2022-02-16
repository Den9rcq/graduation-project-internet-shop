import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { BasketPage, LoginPage, MainPage, ProductPage, RegistrationPage } from "./pages";
import NavBar from "./ui/NavBar";
import AppLoader from "./hoc/AppLoader";

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
                       <Redirect to='/' />
                   </Switch>
               </AppLoader>
            </>
        </Router>
    )
}

export default App;

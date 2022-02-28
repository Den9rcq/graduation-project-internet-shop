import React from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { BasketPage, LoginPage, MainPage, ProductPage, RegistrationPage } from './pages'
import NavBar from './ui/NavBar'
import AdminPanelPage from './pages/AdminPanelPage'
import LogoutPage from './pages/LogoutPage'
import AppLoader from './hoc/AppLoader'
import { ToastContainer } from 'react-toastify'
import history from '../utils/history'
import ProtectedRoute from './common/ProtectedRoute'
import BasketRoute from './ui/BasketRoute'
import OrderPage from './pages/OrderPage'

function App() {
    return (
        <Router history={history}>
            <>
                <AppLoader>
                    <NavBar />
                    <Switch>
                        <Route path='/' exact component={MainPage} />
                        <Route path='/product/:productId' component={ProductPage} />
                        <BasketRoute path='/basket/:userId' component={BasketPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/registration' component={RegistrationPage} />
                        <ProtectedRoute path='/admin-panel' component={AdminPanelPage} />
                        <Route path='/logout' component={LogoutPage} />
                        <Route path='/order' component={OrderPage} />
                        <Redirect to='/' />
                    </Switch>
                </AppLoader>
                <ToastContainer
                    position='top-center'
                    autoClose={2000} />
            </>
        </Router>
    )
}

export default App

import React from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import FoodDetailsPage from '../../pages/FoodDetailsPage/FoodDetailsPage';
import HistoryPage from '../../pages/HistoryPage/HistoryPage';
import GetStartedPage from '../../pages/GetStartedPage/GetStartedPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import OrdersPage from '../../pages/OrdersPage/OrdersPage';
import OffersPage from '../../pages/OffersPage/OffersPage';
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import CartPage from '../../pages/CartPage/CartPage';
import MyProfilePage from '../../pages/MyProfilePage/MyProfilePage';
import SearchPage from '../../pages/SearchPage/SearchPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/' exact>
            <GetStartedPage />
          </Route>
          <Route path='/login' exact>
            <LoginPage />
          </Route>
          <Route path='/home' exact>
            <HomePage />
          </Route>
          <Route path='/details'>
            <FoodDetailsPage />
          </Route>
          <Route path='/history' exact>
            <HistoryPage />
          </Route>
          <Route path='/orders' exact>
            <OrdersPage />
          </Route>
          <Route path='/offers' exact>
            <OffersPage />
          </Route>
          <Route path='/checkout/:subpage'>
            <CheckoutPage />
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>
          <Route path='/offers' exact>
            <OffersPage />
          </Route>
          <Route path='/cart' exact>
            <CartPage />
          </Route>
          <Route path='/search/:value'>
            <SearchPage />
          </Route>
          <Route path='/myprofile' exact>
            <MyProfilePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

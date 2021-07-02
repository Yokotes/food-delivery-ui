import React from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import FoodDetailsPage from '../../pages/FoodDetailsPage/FoodDetailsPage';
import HistoryPage from '../../pages/HistoryPage/HistoryPage';
import GetStartedPage from '../../pages/GetStartedPage/GetStartedPage';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import OrdersPage from '../../pages/OrdersPage/OrdersPage';
import OffersPage from '../../pages/OffersPage/OffersPage';
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import CartPage from '../../pages/CartPage/CartPage';
import MyProfilePage from '../../pages/MyProfilePage/MyProfilePage';

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* <GetStartedPage /> */}
        {/* <LoadingPage /> */}
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        {/* <FoodDetailsPage /> */}
        {/* <HistoryPage /> */}
        {/* <OrdersPage /> */}
        {/* <OffersPage /> */}
        {/* <CheckoutPage /> */}
        {/* <ProfilePage /> */}
        {/* <CartPage /> */}
        <MyProfilePage />
      </div>
    </Router>
  )
}

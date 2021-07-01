import React from 'react';
import FoodDetailsPage from '../../pages/FoodDetailsPage/FoodDetailsPage';
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
        <FoodDetailsPage />
      </div>
    </Router>
  )
}

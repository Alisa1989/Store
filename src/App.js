// import './App.css';

import React from "react";
import LandingContainer from "./components/pages/landing/LandingContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Header from "./components/common/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ProductContainer } from "./components/pages/productPage";
import LoginContainer from "./components/pages/customerLogin/LoginContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
          <Route path="/:id" element={<ProductContainer />} />
          <Route exact path="/" element={<LandingContainer />} />
          <Route exact path="/cart" element={<CartContainer />} />            
          <Route exact path="/login" element={<LoginContainer />} />            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

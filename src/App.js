// import './App.css';

import React, { useEffect } from "react";
import LandingContainer from "./components/pages/landing/LandingContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Header from "./components/common/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ProductContainer } from "./components/pages/productPage";
import LoginContainer from "./components/pages/customerLogin/LoginContainer";
import Login from "./components/pages/customerLogin/Login";
import SignUp from "./components/pages/customerLogin/SignUp";

function App() {
  useEffect(()=>{
    // TODO: Call getCart with the ID from the cookies (if there is one)
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
          <Route path=":id" element={<ProductContainer />} />
          <Route exact path="" element={<LandingContainer />} />
          <Route exact path="cart" element={<CartContainer />} />            
          <Route exact path="customerLogin" element={<LoginContainer />} >            
            <Route exact path="login" element={<Login />} />            
            <Route exact path="signup" element={<SignUp />} />
          </Route>            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

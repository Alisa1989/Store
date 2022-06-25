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
import { connect } from "react-redux";

import { getCart } from "./state/actions/cartActions";

function App(props) {
  useEffect(()=>{
    //Call getCart with the ID from the cookies (if there is one)
    props.getCart(sessionStorage.getItem("customerID"));
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



const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = {
  getCart
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

import React, { useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import { getCart } from "./state/actions/cartActions";

import LandingContainer from "./components/pages/landing/LandingContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Header from "./components/common/Header";
import HeaderSeller from "./components/common/HeaderSeller";
import { ProductContainer } from "./components/pages/productPage";
import LoginContainer from "./components/pages/customerLogin/LoginContainer";
import Login from "./components/pages/customerLogin/Login";
import SignUp from "./components/pages/customerLogin/SignUp";
import SellerLanding from "./components/pages/seller/SellerLanding";
import ProductForm from "./components/pages/seller/SellerProductForm";

function App(props) {
  useEffect(() => {
    //Call getCart with the ID from the cookies (if there is one)
    props.getCart(sessionStorage.getItem("customerID"));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="customer" replace />} />
        <Route path="customer" element={<Header />}>
          <Route path="product:id" element={<ProductContainer />} />
          <Route exact path="cart" element={<CartContainer />} />
          <Route exact path="customerLogin" element={<LoginContainer />}>
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<SignUp />} />
          </Route>
          <Route exact path="" element={<LandingContainer />} />
        </Route>
        <Route exact path="/" element={<Navigate to="/customer" replace />} />
        <Route path="seller" element={<HeaderSeller />}>
          <Route exact path="" element={<SellerLanding />} />
          <Route exact path="addProduct" element={<ProductForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = {
  getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

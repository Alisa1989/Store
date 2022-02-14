// import './App.css';

import React from "react";
import LandingContainer from "./components/pages/landing/LandingContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Header from "./components/common/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
          <Route exact path="/" element={<LandingContainer />} />
          <Route exact path="/cart" element={<CartContainer />} />            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

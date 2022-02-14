// import './App.css';

import React from 'react';
import LandingContainer from './components/pages/landing/LandingContainer';
import CartContainer from './components/pages/cart/CartContainer';
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <LandingContainer />
        <CartContainer />
      </header>
    </div>
  );
}

export default App;

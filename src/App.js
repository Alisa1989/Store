// import './App.css';

import React from 'react';
import LandingContainer from './components/pages/landing/LandingContainer';
import CartContainer from './components/pages/cart/CartContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingContainer />
        <CartContainer />
      </header>
    </div>
  );
}

export default App;

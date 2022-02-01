import logo from './logo.svg';
// import './App.css';

import React, {useReducer} from 'react';
import {initialState, productsReducer} from './state/reducers/productsReducer'
import LandingContainer from './components/pages/landing/LandingContainer';
import CartContainer from './components/pages/cart/CartContainer';

function App() {
  const [state, dispatch] = useReducer(productsReducer, initialState)

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

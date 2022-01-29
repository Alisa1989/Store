import logo from './logo.svg';
// import './App.css';

import React, {useReducer} from 'react';
import {initialState, productsReducer} from './state/reducers/productsReducer'
import LandingPage from './components/pages/landing/LandingPage';


function App() {
  const [state, dispatch] = useReducer(productsReducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
      </header>
    </div>
  );
}

export default App;

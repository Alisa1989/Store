import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './state';

const store = createStore(rootReducer, applyMiddleware(thunk));

test('renders app without errors', () => {
    render(<Provider store={store}><App/></Provider>);
  });

test('renders the app header', ()=> {
  //Arrange
    render(<Provider store={store}><App/></Provider>);
  //Act
    const header = screen.getByText(/Store64/i)    
  });

test('logo has link to home', async ()=> {
  //Arrange
    render(<Provider store={store}><App/></Provider>);
  //Act
    const logo = screen.getByText(/Store64/i)    
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  });

test('cart has link to cart', async ()=> {
  //Arrange
    render(<Provider store={store}><App/></Provider>);
  //Act
    const logo = screen.getByText(/go to cart/i)    
    expect(logo.closest('a')).toHaveAttribute('href', '/cart')
  });
  
  //arrange
  //act
  //assert
  //test false positives

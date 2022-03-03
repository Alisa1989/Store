import { render, fireEvent, screen } from '@testing-library/react';
import Header from "../Header";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from '../../../state';
import {BrowserRouter as Router } from "react-router-dom";


const store = createStore(rootReducer, applyMiddleware(thunk));

test('renders the app header', ()=> {
  //Arrange
    render(<Provider store={store}><Router><Header/></Router></Provider>);
  //Act and Assert
    expect(screen.getByText(/Store64/i)).toBeInTheDocument();

  });

test('logo has link to home', async ()=> {
  //Arrange
    render(<Provider store={store}><Router><Header/></Router></Provider>);
  //Act and Assert
    const logo = screen.getByText(/Store64/i)    
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  });

test('cart has link to cart', async ()=> {
  //Arrange
    render(<Provider store={store}><Router><Header/></Router></Provider>);
  //Act and Assert
    const logo = screen.getByText(/go to cart/i)    
    expect(logo.closest('a')).toHaveAttribute('href', '/cart')
  });

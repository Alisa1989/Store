import { render, fireEvent, screen } from '@testing-library/react';
import ProductCard from "../ProductCard";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from '../../../state';
import {BrowserRouter as Router } from "react-router-dom";


const store = createStore(rootReducer, applyMiddleware(thunk));

test('renders the app header', async ()=> {
  //Arrange
  //props.item.title
    render(<Provider store={store}><Router><ProductCard item={{title: "Bandana"}}/></Router></Provider>);
  //Act and Assert
    const headingElement = screen.getByText(/bandana/i);
    expect(headingElement).toBeInTheDocument();

  });

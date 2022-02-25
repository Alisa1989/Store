import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './state';

const store = createStore(rootReducer, applyMiddleware(thunk));

test('renders app withour errors', () => {
    render(<Provider store={store}><App/></Provider>);

  
  //arrange
  //act
  //assert
  //test false positives
});

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
  //Act and Assert
    expect(screen.getByText(/Store64/i)).toBeInTheDocument();

  });

test('logo has link to home', async ()=> {
  //Arrange
    render(<Provider store={store}><App/></Provider>);
  //Act and Assert
    const logo = screen.getByText(/Store64/i)    
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  });

test('cart has link to cart', async ()=> {
  //Arrange
    render(<Provider store={store}><App/></Provider>);
  //Act and Assert
    const logo = screen.getByText(/go to cart/i)    
    expect(logo.closest('a')).toHaveAttribute('href', '/cart')
  });


  // jest.mock("./api/posts");

  // test("We show a list of posts", () => {
  //   render(<Index />);
  //   expect(screen.getByText("Loading...")).toBeInTheDocument();
  //   // highlight-start
  // });
  
//   test('should render one post when user searches for preact', () => {
//     render(<Provider store={store}><App/></Provider>);

//     let posts = screen.getAllByRole('listitem');
//     expect(posts.length).toEqual(20);

    // const searchBar = screen.getByRole('textbox');
    // userEvent.type(searchBar, 'preact');

    // posts = screen.getAllByRole('listitem');
    // expect(posts.length).toEqual(0);
// });
  //arrange
  //act
  //assert
  //test false positives

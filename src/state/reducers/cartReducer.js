import { ADD_TO_CART, SUBTRACT_FROM_CART } from "../actions/cartActions";

export const initialState ={
    cart:[{
        id:99,
        title:'Something in the cart',
        price:'...',
        category:'...',
        description:'...',
        image:'...'
      }]
    };

  export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_TO_CART:
        return {...state,
        price: 'something happened'};
      case SUBTRACT_FROM_CART:
        return {...state,
        price: 'something happened'};
      default:
        return state;
    }
  }


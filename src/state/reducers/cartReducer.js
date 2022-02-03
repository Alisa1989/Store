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
    
  }


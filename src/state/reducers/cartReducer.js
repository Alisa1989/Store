import { ADD_TO_CART, SUBTRACT_FROM_CART, GET_CART_START, GET_CART_SUCCESS, GET_CART_FAILURE } from "../actions/cartActions";

export const initialState = {
  fetchingCart: false,
  error: "",
  cart: {
    total: 0,
    items: [],
  },
};

//Solves an issue of decimal places when adding and subtracting items to the cart
const roundTwoDecimalPlaces =(number) => {
  const rounded = Math.round(number * 1000) / 1000;
  return rounded
}

//Solves an issue when there are multiple items with the same id and you delete one of them
const removeOneItem = (items, payloadId) => {

  const index = items.findIndex(function(element){
    return element.id === payloadId;
  });
  const newArray = items.slice(0, index).concat(items.slice(index+1));
  return newArray;
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_START:
        return {...state, 
        fetchingCart: true};
    case GET_CART_SUCCESS:
        return {...state, 
        fetchingCart: false,
        cart: {
          items: action.payload || [],
        }
      };
    case GET_CART_FAILURE:
        return {...state, 
        fetchingCart: false,
        error: action.payload || []};
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
          total: roundTwoDecimalPlaces(state.cart.total + action.payload.price),
        },
      };
    case SUBTRACT_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: removeOneItem(state.cart.items, action.payload.id),
          total: roundTwoDecimalPlaces(state.cart.total - action.payload.price),
        },
      };
    default:
      return state;
  }
};

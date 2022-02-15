import { ADD_TO_CART, SUBTRACT_FROM_CART } from "../actions/cartActions";

export const initialState = {
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
    case ADD_TO_CART:
      console.log("add to cart in reducer", state.cart.total);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
          total: roundTwoDecimalPlaces(state.cart.total + action.payload.price),
        },
      };
    case SUBTRACT_FROM_CART:
      console.log("removed frpm reducer", state.cart.total);
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

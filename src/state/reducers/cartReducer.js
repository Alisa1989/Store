import { ADD_TO_CART, SUBTRACT_FROM_CART } from "../actions/cartActions";

export const initialState = {
  cart: {
    total: 0,
    items: [],
  },
};

const roundTwoDecimalPlaces =(number) => {
  const rounded = Math.round(number * 1000) / 1000;
  return rounded
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
          total: state.cart.total + action.payload.price,
        },
      };
    case SUBTRACT_FROM_CART:
      console.log("removed frpm reducer", state.cart.total);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(item => item.id !== action.payload.id),
          total: roundTwoDecimalPlaces(state.cart.total - action.payload.price),
        },
      };
    default:
      return state;
  }
};

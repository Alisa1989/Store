export const ADD_TO_CART = "ADD_TO_CART";
export const SUBTRACT_FROM_CART = "SUBTRACT_FROM_CART";

export const addProduct = item => {
    console.log("addProduct in Actions")
    return{type: ADD_TO_CART, payload: item}
};
export const removeProduct = item => {
    return{type: SUBTRACT_FROM_CART, payload: item}
};


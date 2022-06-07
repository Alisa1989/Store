import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const SUBTRACT_FROM_CART = "SUBTRACT_FROM_CART";
export const GET_CART_START = "GET_CART_START"
export const GET_CART_SUCCESS = "GET_CART_SUCCESS"
export const GET_CART_FAILURE = "GET_CART_FAILURE"

export const getCart = (userID) => (dispatch) => {
    dispatch({type: GET_CART_START});
    axios
        .get (`http://localhost:4000/carts/customers/${userID}`)
        .then((response)=> {
            dispatch({ type: GET_CART_SUCCESS, payload: response.data});
        })
        .catch((error) => {
            dispatch({type: GET_CART_FAILURE, payload: `${error.response.message} code: ${error.response.code}`});
        })
};


export const addProduct = item => {
    return{type: ADD_TO_CART, payload: item}
};
export const removeProduct = item => {
    return{type: SUBTRACT_FROM_CART, payload: item}
};


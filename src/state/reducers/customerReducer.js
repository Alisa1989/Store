import {ADD_CUSTOMER, DELETE_CUSTOMER} from "../actions/customerActions";

export const initialState ={
        customerData: []
    }

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customerData: [action.payload]
            }

        case DELETE_CUSTOMER:
            return {
                ...state,
                customerData: {}
            }
        default:
            return state;
    }
}

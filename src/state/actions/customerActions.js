export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER"; 

export const addCustomer = item => {
    return{type: ADD_CUSTOMER, payload: item}
};
export const deleteCustomer = item => {
    return{type: DELETE_CUSTOMER, payload: item}
};


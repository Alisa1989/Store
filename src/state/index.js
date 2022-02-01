import { combineReducers } from "redux";

import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    // cart
});

export default rootReducer;
import { combineReducers } from "redux";

import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import { customerReducer } from "./reducers/customerReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    customer: customerReducer
});

export default rootReducer;
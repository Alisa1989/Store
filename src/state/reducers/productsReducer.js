import { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE} from "../actions/productsActions";

export const initialState ={
    isFetching: false,
    products:[{
        id:1,
        title:'...',
        price:'...',
        category:'...',
        description:'...',
        image:'...'
      }],
      error: ""
    }

export const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS_START:
            console.log("getproducts in products reducer")
            return {...state, 
            isFetching: true};
        case GET_PRODUCTS_SUCCESS:
            return {...state, 
            isFetching: false,
            products: action.payload || []};
        case GET_PRODUCTS_FAILURE:
            return {...state, 
            isFetching: false,
            error: action.payload || []};
        default:
            return state;
    }
}

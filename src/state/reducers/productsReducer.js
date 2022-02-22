import { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, FILTER_PRODUCTS} from "../actions/productsActions";

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


const filterItems = (products, keyword) => {
    console.log("products", products, "keyword", keyword)
    if (keyword !== ''){
        const results = products.filter((product) => {
            return product.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });
        return results;
    }
    return products;
};



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
        case FILTER_PRODUCTS:
            console.log("filter products in reducer", state.products)
            return {...state,
            products: filterItems(state.products, action.payload)}
        default:
            return state;
    }
}

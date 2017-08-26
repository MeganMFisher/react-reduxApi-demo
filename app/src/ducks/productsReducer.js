import * as storeProducts from '../productsService';

const initialState = {
    products: []
};

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING';  //fired when request is first made.
const GET_PRODUCTS_FULLFILLED = 'GET_PRODUCTS_FULLFILLED';  //fired when you finish getting the data.

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS_PENDING:
            return Object.assign({}, state)

        case GET_PRODUCTS_FULLFILLED: 
            return Object.assign({}, state, { products: action.payload })
        default: 
            return state;
    }
   
}

export function getProducts() {
    return {
        type: GET_PRODUCTS,
        payload: storeProducts.getProducts()
    }
}
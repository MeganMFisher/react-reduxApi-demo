import * as storeProducts from '../productsService';

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING';  //fired when request is first made.
const GET_PRODUCTS_FULFILLED = 'GET_PRODUCTS_FULFILLED';  //fired when you finish getting the data.

//promise middleware: When you kick off an action it will give that action a promise and will add on the '_PENDING' and '_FULFILLED' so if not spelled correctly they won't work.


const initialState = {
    products: []
};

export default function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_PRODUCTS_PENDING:
            return Object.assign({}, state)

        case GET_PRODUCTS_FULFILLED: 
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
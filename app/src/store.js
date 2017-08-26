import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import productsReducer from './ducks/productsReducer';


const reducer = combineReducers({
    products: productsReducer
})

export default createStore(
    reducer, 
    applyMiddleware(reduxPromiseMiddleware)
);

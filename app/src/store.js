// import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createStore, applyMiddleware} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import productsReducer from './ducks/productsReducer';


// const reducer = combineReducers({
//     products: productsReducer
// })

export default createStore(
    // reducer, 
    productsReducer,
    applyMiddleware(reduxPromiseMiddleware())
);



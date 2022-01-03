import { combineReducers } from 'redux';
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_PRODUCT_PROFILE, RECEIVE_PRODUCT_PROFILE } from "../actions/products";

const initialProductState = {
    products: [],
    isFetching: true
}

const initialProductProfileState = {
    product: {},
    isFetching: true
}

const productProfile = (state = initialProductProfileState, actions) => {
    switch(actions.type) {
        case REQUEST_PRODUCT_PROFILE:
            return {...state, isFetching: true} 
        case RECEIVE_PRODUCT_PROFILE:
            return {...state, product: actions.product, isFetching: false}
        default:
            return state
    }
}

const products = (state = initialProductState, action) => {
    switch(action.type) {
        case REQUEST_PRODUCTS:
            return {...state, isFetching: true};
        case RECEIVE_PRODUCTS:
            const nextState = {...state, isFetching: false};
            action.products.map((product) => {
                nextState.products[product.id] = product
            });
            return nextState;
        default:
            return state;
    }
}
const product = combineReducers({
    productProfile: productProfile,
    products: products
})

export default product;
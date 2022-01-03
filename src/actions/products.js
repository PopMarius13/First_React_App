import { fetchProducts } from '../fake-backend';
// Action Types
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT_ERROR = 'RECEIVE_PROFILE_ERROR';

export const REQUEST_PRODUCT_PROFILE = 'REQUEST_PRODUCT_PROFILE';
export const RECEIVE_PRODUCT_PROFILE = 'RECEIVE_PRODUCT_PROFILE';
//Action Creators

const requestProducts = () => {
    return {
        type: REQUEST_PRODUCTS
    }
}

const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products: products
    }
}

const fetchProductList = () => {
    return (dispatch) => {
        dispatch(requestProducts())
        return fetchProducts({method: 'GET'}).then(
            data => {
                dispatch(receiveProducts(data))
            },
            error => {
                dispatch(receiveProductsError(error.message))
            }
            )
    }
}

const shouldFetchProductList = (state) => {
    const { products } = state.product.products;
    if(!products.length) 
        return true;
    return false;
}

export const fetchProductListIfNeeded = () => {
    return (dispatch, getState) => {
        if (shouldFetchProductList(getState())){
            dispatch(fetchProductList())
        } else {
            return Promise.resolve();
        }
    }
}

const requestProductProfile = () => {
    return {
        type: REQUEST_PRODUCT_PROFILE
    }
}

const receiveProductProfile = (product) => {
    return {
        type: RECEIVE_PRODUCT_PROFILE,
        product: product
    }
}

const receiveProductsError = (error) => {
    return {
        type: RECEIVE_PRODUCT_ERROR,
        error: error
    }
}

const fetchProductProfile = (id) => {
    return (dispatch) => {
        dispatch(requestProductProfile())
        return fetchProducts({method: 'FIND', id: id}).then(
            product => {
                dispatch(receiveProductProfile(product))
            },
            error => {
                dispatch(receiveProductsError(error.message))
            }
        )
    }
}

const shouldFetchProductProfile = (state, id) => {
    const { product } = state.product.productProfile;
    if (product.id !== id) {
        return true;
    }
    return false;
}

export const fetchProductProfileIfNeeded = (id) => {
    return (dispatch, getState) => {
        if (shouldFetchProductProfile(getState(), id)) {
            dispatch(fetchProductProfile(id))
        } else {
            return Promise.resolve()
        }
    }
}
import {fetchProductReviews, addReview} from '../fake-backend'
// Action Types 
export const REQUEST_REVIEWS = 'REQUEST_REVIEWS';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const REQUEST_ADD_REVIEW = 'REQUEST_ADD_REVIEW';
export const SUCCESS_ADD_REVIEW = 'SUCCESS_ADD_REVIEW';

//Action Creators

const requestReviews = (productID) => {
    return {
        type: REQUEST_REVIEWS,
        productID: productID
    }
}

const receiveReviews = (productID, reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        productID: productID,
        reviews: reviews
    }
}

export const fetchReviews = (productID) => {
    return (dispatch) => {
        dispatch(requestReviews(productID))
        return fetchProductReviews(productID).then(data => dispatch(receiveReviews(productID, data)))
    }
}

const requestAddReview = (productID) => {
    return {
        type: REQUEST_ADD_REVIEW,
        productID: productID
    }
}

const successAddReview = (productID, reviews) => {
    return {
        type: SUCCESS_ADD_REVIEW,
        productID: productID,
        reviews: reviews
    }
}

export const addNewReview = (productID, review) => {
    return (dispatch) => {
        dispatch(requestAddReview)
        return addReview(productID, review).then(res => dispatch(successAddReview(productID, res)))
    }
}
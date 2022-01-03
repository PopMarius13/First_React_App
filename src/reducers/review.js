import { REQUEST_REVIEWS, RECEIVE_REVIEWS, REQUEST_ADD_REVIEW, SUCCESS_ADD_REVIEW } from "../actions/reviews";

const initialReviewsState = {
    isFetching: false,
    isAdding: false,
    items: []
}

const reviews = (state = initialReviewsState, action) => {
    switch(action.type) {
        case REQUEST_REVIEWS:
            return {...state, isFetching: true}
        case RECEIVE_REVIEWS:
            return {...state, isFetching:false, items: action.reviews}

        case REQUEST_ADD_REVIEW:
            return {...state, isAdding: true}
        case SUCCESS_ADD_REVIEW:
            return {...state, isAdding: false, items: action.reviews}

        default:
            return state;
    }
}

const reviewsByProductID = (state = {}, action) => {
    switch(action.type) {
        case REQUEST_REVIEWS:
        case RECEIVE_REVIEWS:
        case REQUEST_ADD_REVIEW:
        case SUCCESS_ADD_REVIEW:
            // const nextState = {};
            // nextState[action.productID] = reviews(state[action.productID], action) 
            // return {...nextState}
            return {...state, 
                [action.productID]: reviews(state[action.productID], action)
            }
        default:
            return state;
    }
}

export default reviewsByProductID;
import { combineReducers } from 'redux';
import product from './product';
import {name, profile} from './name';
import error from './error';
import reviewsByProductID from './review';

export default combineReducers({
    name: name,
    profile: profile,
    error: error,
    product: product,
    reviewsByProductID: reviewsByProductID
});

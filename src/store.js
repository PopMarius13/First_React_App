import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const store = createStore(
            combineReducers,
            applyMiddleware(thunk, logger));
export default store;


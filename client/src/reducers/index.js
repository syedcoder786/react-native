import {combineReducers} from 'redux';
import reviewsReducer from './reviewsReducers';
import errorReducer from './errorReducers';

export default combineReducers({
    reviews: reviewsReducer,
    error:errorReducer
});
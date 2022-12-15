import { FETCH_REVIEWS, REVIEWS_LOADING, REVIEWS_LOADED } from '../actions/types';

const initialState={
    items:[],
    reviewsLoading: false
}
export default function(state=initialState,action){
    switch(action.type){
        case REVIEWS_LOADING:
        return{
            ...state,
            reviewsLoading:true
            }
        case REVIEWS_LOADED:
        return{
            ...state,
            reviewsLoading:false
            }
        case FETCH_REVIEWS:
        // localStorage.removeItem('price')
        return {
            ...state,
            items:action.payload
        };
        default:
        return state;
    };
}
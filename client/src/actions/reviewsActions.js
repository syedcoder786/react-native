import { FETCH_REVIEWS, REVIEWS_LOADING, REVIEWS_LOADED, ADD_REVIEW, ERROR_REVIEW } from './types';
import axios from 'axios';
import {returnErrors} from './errorActions'

var x=0,y;

export const fetchReviews = () => dispatch => {
    if(x===0){
      dispatch({ type:REVIEWS_LOADING })
    }
    // console.log("actions ke andar")
    // axios.get('http://localhost:5000/api/fetchReviews')
    axios.get('https://react-native-serverjs.herokuapp.com/api/fetchReviews')
      .then(reviews => {
        if(x===0){
        // console.log(reviews.data)
            dispatch({ type:REVIEWS_LOADED })
            dispatch({
                type:FETCH_REVIEWS,
                payload:reviews.data
            })
            x=1;
            y=reviews.data.length;
        }else if(y !== reviews.data.length){
          console.log(y)
                  // axios.get('http://localhost:5000/api/fetchReviews')
                  axios.get('https://react-native-serverjs.herokuapp.com/api/fetchReviews')
                    .then(reviews => {
                      // dispatch({type:POST_LOADED})
                      dispatch({
                        type: FETCH_REVIEWS,
                        payload: reviews.data
                      })
                  })
                  y=reviews.data.length;
                  // console.log('secound')
        }
      })
      
};

export const addReview = (review) => dispatch =>{
  dispatch({ type:ADD_REVIEW })
  // console.log("inside post")
  axios({
      method:'post',
      // url:'http://localhost:5000/api/addReview',
      url:'https://react-native-serverjs.herokuapp.com/api/addReview',
      data: review
  }).then(review => {
      console.log(review.data)
}).catch(err=>{
  console.log(err.response.status)
  dispatch(returnErrors(err.response.data, err.response.status,'ERROR_REVIEW'));
//   dispatch({
//     type:REGESTER_FAIL
// })
})
}

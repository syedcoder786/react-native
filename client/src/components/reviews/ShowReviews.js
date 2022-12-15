import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { fetchReviews } from '../../actions/reviewsActions';

class ShowReviews extends Component {

  // state={
  //   review:[]
  // }

    componentDidMount(){
      this.props.fetchReviews()
      setInterval(
        () => this.props.fetchReviews(),
        1000
      );
      }
    // componentDidUpdate(prevProps){
    //   const {reviews} = this.props;
    //   // this.props.fetchReviews();
    //   console.log("kuch ni")
    //   if(reviews !== prevProps.reviews){
    //     console.log("kuch toh hai")
    //     console.log(reviews)
    //     this.setState({review:reviews})
    //   }
    // }

    render(){

        const reviewsItems = this.props.reviews.map(({ _id, name, review }) => (
            <View style={styles.review} key={_id}>
                    <Text style={styles.reviewReview}>{review}</Text>
                    <Text style={styles.reviewName}>-By {name}</Text>
            </View>
          )
            
        );

        return (
          // <View>
            <ScrollView>
              <View style={styles.reviews}>
                  <Text style={styles.reviewsdiscp}>
                      All Reviews
                  </Text>
                  {/* {reviewsItems} */}
                  {this.props.reviewsLoading?<View><Text>Loading...</Text></View>:reviewsItems}
                  {/* <View style={styles.review}>
                      <Text style={styles.reviewReview}>Review</Text>
                      <Text style={styles.reviewName}>-By name</Text>
                  </View>
                  <View style={styles.review}>
                      <Text style={styles.reviewReview}>Review</Text>
                      <Text style={styles.reviewName}>-By name</Text>
                  </View> */}
              </View>
            </ScrollView>
            // </View>
        );
    }

}

const styles = StyleSheet.create({
  reviews: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#eee",
    marginTop: 15
  },
  reviewsdiscp: {
    // width: '70%',
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  review: {
    width: '80%',
    padding: 8,
    // fontSize: 18,
    borderWidth: 1.5,
    borderColor: "#ddd",
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 10
  },
  reviewReview: {
    fontSize: 18,
    color: '#3D3C3A'
  },
  reviewName: {
    fontSize: 15,
    color: '#6D6968'
  }
});

const mapStateToProps=state=>({
    reviews:state.reviews.items,
    reviewsLoading:state.reviews.reviewsLoading
});

export default connect(mapStateToProps, { fetchReviews })(ShowReviews);
// export default ShowReviews;

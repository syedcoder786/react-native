import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { addReview, fetchReviews } from '../../actions/reviewsActions';
import { clearErrors } from '../../actions/errorActions';

class Form extends Component {

  state = {
    name:"",
    review:"",
    msg:null
  }

  componentDidUpdate(prevProps){
    const {error} = this.props;
    if(error !== prevProps.error){
      if(error.id ==='ERROR_REVIEW'){
        this.setState({msg:this.props.error.msg.msg})
      }else{
        this.setState({msg:null})
      }
    }
  }

  onTextChange = (name) => (value) => {
    this.setState({ [name]: value });
    // console.log(this.state.name)
  };
  onPress = () => {
    const newreview = {
      name:this.state.name,
      review:this.state.review,
    };
    console.log(newreview)
    this.setState({
      name:"",
      review:""
    })
    // this.props.reviews.unshift(newreview)
    this.props.addReview(newreview) 
    this.props.clearErrors()
    // this.props.fetchReviews()
  }
    render(){
        return (
            <View style={styles.form}>
              <Text style={styles.err}>{this.state.msg}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    onChangeText={this.onTextChange("name")}
                    value={this.state.name}
                    // name="rname"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Review (eg. Awesome 5/5)'
                    onChangeText={this.onTextChange("review")}
                    value={this.state.review}
                    // name="review"
                />
                <View style={styles.btn}>
                <Button
                    onPress={this.onPress}
                    title='Add Review'
                    color='coral'
                />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFECF9",
    // marginBottom: 2
  },
  input: {
    width: '70%',
    height: 38,
    padding: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ddd",
    marginBottom: 5
  },
  btn: {
    width: "70%",
    height: 35,
    marginBottom: 15,
    marginTop: 5,
    // padding: 2,
  },
  err: {
    // padding: 5,
    marginTop: 8,
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
  }
});

const mapStateToProps=state=>({
  reviews:state.reviews.items,
  error:state.error
});

export default connect(mapStateToProps, {addReview, fetchReviews, clearErrors} )(Form);
// export default Form;

import React, { Component } from 'react';
import { View } from 'react-native';
import Form from './Form';
import ShowReviews from './ShowReviews';

class Reviews extends Component {
    render(){
        return (
            <View style={{backgroundColor: '#E0D8E0'}}>
                <Form/>
                <ShowReviews/>
            </View>
        )
    }
}

export default Reviews;

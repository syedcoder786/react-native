import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import Header from '../shared/Header';
import Reviews from '../reviews/Reviews';

const screens = {
    Reviews: {
        screen: Reviews,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation = {navigation} title = 'Reviews'/>,
            } 
        }
    }
}

const ReviewsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor:'#eee', height:60 }
    }
})

export default ReviewsStack;
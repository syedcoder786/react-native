import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import Header from '../shared/Header';
import Home from '../home/Home';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation = {navigation} title = 'Home'/>,
            } 
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor:'#eee', height:60 }
    }
})

export default HomeStack;
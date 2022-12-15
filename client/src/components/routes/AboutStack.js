import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
// import Boxes from '../Boxes';
import Header from '../shared/Header';
import About from '../about/About';
// import About from '../About';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation = {navigation} title = 'About'/>,
            } 
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor:'#eee', height:60 }
    }
})

export default AboutStack;
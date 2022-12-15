import { createAppContainer } from 'react-navigation';  
import { createDrawerNavigator } from 'react-navigation-drawer';  
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';
import ReviewsStack from './ReviewsStack';


const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack
    },
    Reviews:{
        screen: ReviewsStack
    },
    About:{
        screen: AboutStack
    }
})

export default createAppContainer(RootDrawerNavigator);
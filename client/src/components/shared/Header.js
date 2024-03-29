import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header( {navigation, title} ) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style = { styles.header }>
            {/* <View style = {styles.headercontent}> */}
                <MaterialIcons name='menu' size={28} onPress={ openMenu } style = { styles.icon }></MaterialIcons>
                <View>
                    <Text style = { styles.headerText }>{ title }</Text>
                </View>
                
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    // headercontent:{
    //     flexDirection: 'row'
    // },
    icon: {
        position: 'absolute',
        left: 0
    }
})
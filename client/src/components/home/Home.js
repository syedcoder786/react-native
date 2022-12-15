import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import Boxes from '../Boxes';
import Pbox from './Pbox';

class Home extends Component {
  render(){
    return (
        <View style={styles.headertop}>
            <View style={styles.header}>
                {/* <Text>Header content</Text> */}
                <Image
                  style={styles.img}
                  // source={{ uri: 'asset:/icon.png' }}
                  source={require("../../../assets/bg.jpg")}
                />
              <Text style={styles.heading}>
                Welcome to my first react-native-app :)
              </Text>
            </View>
            <Pbox/>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  headertop: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#E2F6F6'
    // backgroundColor: "#eee",
  },
  header: {
    width: "100%",
    // height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    // marginTop: 2
    // paddingTop: 10
  },
  img: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    // fontFamily: 'Open Sans',
    color: '#5C70CA',
    margin: 15,
    // backgroundColor: 'silver'
  },
});

export default Home;

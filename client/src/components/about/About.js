import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class About extends Component {
  render(){
    return (
        <ScrollView>
        <View style={styles.header}>
        <Text style={styles.homediscp}>
                      About Us
                  </Text>
            <View style={styles.theader}>
                <Text style={styles.ttext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Arcu dictum varius duis at consectetur lorem donec massa sapien. Massa id neque aliquam vestibulum. Lacus laoreet non curabitur gravida arcu ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Eu mi bibendum neque egestas congue quisque. Sollicitudin ac orci phasellus egestas tellus. Eu facilisis sed odio morbi quis. Vestibulum lorem sed risus ultricies tristique nulla. Accumsan tortor posuere ac ut. Semper viverra nam libero justo laoreet sit amet cursus. Tellus mauris a diam maecenas sed. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Feugiat in fermentum posuere urna nec tincidunt.
                </Text>
            </View>
            <View style={styles.theader}>
                <Text style={styles.ttext}>
                Arcu bibendum at varius vel pharetra vel. Blandit cursus risus at ultrices. Netus et malesuada fames ac turpis egestas. Massa id neque aliquam vestibulum. Amet justo donec enim diam vulputate ut pharetra sit. Sit amet nisl purus in mollis nunc sed. Nunc id cursus metus aliquam eleifend mi in. Ultrices dui sapien eget mi. Nullam non nisi est sit amet facilisis. Imperdiet nulla malesuada pellentesque elit. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Purus sit amet luctus venenatis.                 </Text>
            </View>
            <View style={styles.box}>
                <Image
                style={styles.imge}
                source={require("../../../assets/dp3.png")}
                />
                <Text style={styles.pName}>Alex Hetachi</Text>
                <Text style={styles.pDiscp}>Student at JMI Btech(ECE)</Text>
            </View>
        </View>
        </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    // height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0D8E0",
  },
  homediscp: {
    // width: '70%',
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
    // marginBottom: 5
  },
  theader: {
    width: '80%',
    backgroundColor: '#D0C8D3',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  ttext: {
    fontSize: 15,
  },
  box: {
    width: '65%',
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    // fontSize: 18,
    borderWidth: 1.5,
    borderColor: "#ddd",
    backgroundColor: '#D8C9D3',
    borderRadius: 10,
    marginBottom: 10
  },
    imge: {
    width: '80%',
    // borderRadius: 2000,
    height: 150,
    // borderRadius: 5,
  },
  pName:{
    fontSize: 17,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#E7765D'
  },
  pDiscp:{
    fontSize: 15,
    // marginTop: 8,
    fontWeight: 'bold',
    color: 'grey'
  },
});

export default About;

import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking , Image, ScrollView} from 'react-native';

class Boxes extends Component {
    state = {
        he: 20,
    }
  render(){
      const st = 10;
    return (
      <ScrollView style={styles.container}>
          <View style={{height:st}}>

          </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                    style={styles.imge}
                    source={require("../../assets/annonym.jpeg")}
                    />
                    <Text style={styles.pname}>CSS</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                    style={styles.imge}
                    source={require("../../assets/annonym.jpeg")}
                    />
                    <Text style={styles.pname}>Javascript</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                    style={styles.imge}
                    source={require("../../assets/annonym.jpeg")}
                    />
                    <Text style={styles.pname}>Reactjs</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                    style={styles.imge}
                    source={require("../../assets/annonym.jpeg")}
                    />
                    <Text style={styles.pname}>nodejs</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image
                    style={styles.imge}
                    source={require("../../assets/annonym.jpeg")}
                    />
                    <Text style={styles.pname}>Reactjs</Text>
                </View>
            </View>
            {/* </View> */}
        </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  // container: {
  //   width: '100%',
  //   // height: '100%',
  //   // alignItems: "center",
  //   // justifyContent: "center",
  //   padding: 5,
  //   // flexDirection: 'row',
  //   // flexWrap: 'wrap'
  // },
  // box: {
  //   width: '80%',
  //   height: '25%',
  //   padding: 5,
  //   // padding: "10"
  //   // margin: "10 px"
  // },
  // inner: {
  //   flex: 1,
  //   backgroundColor: '#eee',
  //   alignItems: 'center',
  //   // justifyContent: 'center'
  // },
  // imge: {
  //   width: '90%',
  //   height: '75%',
  //   marginTop: 10,
  //   borderRadius: 5,
  // },
  pname: {
    fontSize: 15,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#7B68EE'
  }
});

export default Boxes;

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

class Pbox extends Component {

    render(){

        return (
            <ScrollView>
              <View style={styles.containerbox}>
                  <Text style={styles.discp}>
                      List of some cool programming languages.
                  </Text>
                  {/* <ScrollView> */}
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/html.jpg")}
                        />
                      <Text style={styles.pName}>HTML</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/css.png")}
                        />
                      <Text style={styles.pName}>CSS</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/js.jpg")}
                        />
                      <Text style={styles.pName}>Javascript</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/reactjs.png")}
                        />
                      <Text style={styles.pName}>Reactjs</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/nodejs.jpg")}
                        />
                      <Text style={styles.pName}>Nodejs</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/mongodb.png")}
                        />
                      <Text style={styles.pName}>Mongodb</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/php.png")}
                        />
                      <Text style={styles.pName}>Php</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/mysql.jpg")}
                        />
                      <Text style={styles.pName}>Mysql</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/c.png")}
                        />
                      <Text style={styles.pName}>C++</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                        style={styles.imge}
                        source={require("../../../assets/python.jpg")}
                        />
                      <Text style={styles.pName}>Python</Text>
                  </View>
                  {/* </ScrollView> */}
                  {/* <Text>{'\n'}</Text> */}
                  <Text style={styles.dtext}>Don't forget to add review in review section.</Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>
                  <Text>{'\n'}</Text>
              </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
  containerbox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#eee",
    marginTop: 10,
    // backgroundColor: '#383838'
  },
  discp: {
    // width: '70%',
    padding: 5,
    fontSize: 17,
    color: '#716A72',
    // fontWeight: 'bold',
    marginBottom: 5
  },
  box: {
    width: '90%',
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    // fontSize: 18,
    borderWidth: 1.5,
    borderColor: "#ddd",
    backgroundColor: '#EBE7EC',
    borderRadius: 10,
    marginBottom: 10
  },
    imge: {
    width: '100%',
    height: 200,
    // marginTop: 5,
    borderRadius: 5,
  },
  pName:{
    fontSize: 17,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#7B68EE'
  },
  dtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5A575A'
  },
//   reviewReview: {
//     fontSize: 18,
//     color: '#3D3C3A'
//   },
//   reviewName: {
//     fontSize: 15,
//     color: '#6D6968'
//   }
});

// export default connect(mapStateToProps, { fetchReviews })(ShowReviews);
export default Pbox;

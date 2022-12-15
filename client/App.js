import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
import Drawer from './src/components/routes/Drawer';
import {Provider} from 'react-redux';
import store from './src/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <Drawer/>
      </Provider>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CounterApp from './CounterApp';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <CounterApp />
      </View>
    );
  }
}

export default Home;

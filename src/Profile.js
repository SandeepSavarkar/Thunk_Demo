import React, {Component} from 'react';
import {View,Text} from 'react-native';
import CounterApp from './CounterApp';

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Profile</Text>
        <CounterApp />
      </View>
    );
  }
}

export default Profile;

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux';
import {store} from './src/Screen/store'
// import reducer from './src/reducer';
// import thunk from 'redux-thunk';
// import {NavigationContainer} from '@react-navigation/native';
// import Navigation from './src/Navigation'
// import Home from './src/Home';
// import Profile from './src//Profile';
/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - pure functions
 *  - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */

//const store = createStore(reducer, applyMiddleware(thunk));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App;

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

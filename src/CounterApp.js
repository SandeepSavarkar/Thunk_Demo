// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as action from './Screen/action';
import {Provider as PaperProvider} from 'react-native-paper';
class CounterApp extends Component {
  renderItemComponent = data => (
    <TouchableOpacity style={styles.container}>
      <Text key={data.item.id}>{data.item.id}</Text>
      <Text>{data.item.name}</Text>
    </TouchableOpacity>
  );

  ItemSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );
  render() {
    return (
      <PaperProvider>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          {/* <TouchableOpacity onPress={() => this.props.increase()}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={() => this.props.decrease()}>
          <Text>Decrease</Text>
        </TouchableOpacity> */}

          <TouchableOpacity onPress={() => this.props.fetchUser()}>
            <Text>Get Users</Text>
          </TouchableOpacity>
          <FlatList
            data={this.props.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.ItemSeparator}
          />
        </View>
      </PaperProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    //counter: state.counter,
    loader: state.loader,
    data: state.data,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //  increase: () => dispatch(action.increase()),
    //  decrease: () => dispatch(action.decrease()),
    fetchUser: () => dispatch(action.fetchUsers()),
  };
}
const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
// import React, {Component} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {connect} from 'react-redux';
// class CounterApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View
//           style={{
//             flexDirection: 'row',
//             width: 200,
//             justifyContent: 'space-around',
//           }}>
//           <TouchableOpacity onPress={() => this.props.increaseCounter()}>
//             <Text style={{fontSize: 20}}>Increase</Text>
//           </TouchableOpacity>
//           <Text style={{fontSize: 20}}>{this.props.counter}</Text>
//           <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
//             <Text style={{fontSize: 20}}>Decrease</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
//     decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

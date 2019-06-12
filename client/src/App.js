import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, inject, observer } from 'mobx-react';
import BirdStore from './stores/BirdStore';


export default class App extends React.Component {
  render() {
    return (
      <Provider BirdStore={BirdStore}>
        <View style={styles.container}>
          <Text>Users</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 120,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

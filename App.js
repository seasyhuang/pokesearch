import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Landing from './src/Landing';
import Search from './src/Search';

// import { Logs } from 'expo'
// Logs.enableExpoCliLogging()

export default class App extends React.Component {
  state = {
    currentScreen: "landing"
    // currentScreen: "search"
  }
  switchScreen = (currentScreen) => {
    this.setState({ currentScreen });
  }
  renderScreen = () => {
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen = { this.switchScreen } />
      )
    }
    else if(this.state.currentScreen === "search"){
      return(
        // <Search switchScreen = { this.switchScreen } />
        <Search />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        { this.renderScreen() }

        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#FFFAEA',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: Platform.OS === "android" ? 24 : 0,
  },

});

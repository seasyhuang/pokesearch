import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';

import Landing from './src/Landing';


export default function App() {
  return (
    <View style={styles.container}>
      <Landing/>
      
      <StatusBar style="auto" />
    </View>
  );
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

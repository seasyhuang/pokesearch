import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const image = { uri: "https://cdn.dribbble.com/users/228053/screenshots/2760950/starters3.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        resizeMode='contain'
      >
        <Text
          style = {
            { marginBottom: 120 }
          }
        >
        Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </ImageBackground>

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
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
});

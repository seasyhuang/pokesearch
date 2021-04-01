import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import { Button } from 'native-base';

// const image = require(./assests/icons/whatever_image_here.jpg);
const image = { uri: "https://cdn.dribbble.com/users/228053/screenshots/2760950/starters3.jpg" };


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        resizeMode='contain'>

          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to Pokesearch</Text>
            <Button
                block={true}
                style={styles.buttonStyle}
                onPress={() => {}}
              >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>

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
    marginTop: Platform.OS === "android" ? 24 : 0,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 500,
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center',
  },
  buttonStyle: {
    margin: 10,
    color: 'blue'
  },
  buttonText: {
    color: 'white'
  }
});

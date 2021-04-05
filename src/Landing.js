import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'native-base';


// const image = require(./assests/icons/whatever_image_here.jpg);
const image = { uri: "https://cdn.dribbble.com/users/228053/screenshots/2760950/starters3.jpg" };

class Landing extends React.Component{
  render () {
    return (
      <View>
        <ImageBackground
          source={image}
          style={styles.image}
          resizeMode='contain'>

            <View style={styles.viewStyle}>
              <Text style={styles.titleStyle}>Welcome to Pokesearch</Text>
              <Button
                  block={true}
                  style={styles.buttonStyle}
                  onPress={() => this.props.switchScreen("search")}
                >
                <Text style={styles.buttonText}>Start Searching</Text>
              </Button>
            </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Landing;

const styles = {
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
}

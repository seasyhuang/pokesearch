import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, ImageBackground } from 'react-native'
import { Header, Item, Icon, Input, Button } from 'native-base'

const image = { uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif" };

class PokeLoader extends React.Component {
  render () {
    return(
      <View style={ styles.viewStyle }>
        <ImageBackground
          source={ image }
          style={ styles.img }
        >
        </ImageBackground>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#FCFEFC',
    alignItems: 'center',

  },
  img: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default PokeLoader;

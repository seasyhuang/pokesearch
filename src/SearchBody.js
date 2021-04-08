import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Image } from 'react-native'
import { ListItem, List } from 'native-base'

class SearchBody extends React.Component {
  render () {
    // not best way of getting data but it works
    let pokemon = this.props.data

    if (!pokemon) {
      return <View></View>
    }
    return(
      <ScrollView style = {{ flex: 1 }}>
        <Text style = { styles.header } >#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
        <View style = { styles.viewStyle } >
          <Image
            source = {{ uri: pokemon.sprites.front_default }}
            style = { styles.img }
          />
        </View>
        <View style = { styles.info } >
          <ListItem itemDivider>
            <Text style = {{ fontWeight: 'bold' }}>Size:</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Weight: { pokemon.weight/10 } kg | { Math.round((pokemon.weight/10 * 2.205) * 100)/100 } lbs</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Height: { pokemon.height/10 } m | { Math.round((pokemon.height/10* 39.37) * 100)/100 } in</Text>
          </ListItem>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  header: {
    fontSize: 30,
    color: 'red',
    flex: 1
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  img: {
    // https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.8,
  }
};

export default SearchBody;

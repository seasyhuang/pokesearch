import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text, Image, ImageBackground, Dimensions } from 'react-native'
import { ListItem, List } from 'native-base'

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

class SearchBody extends React.Component {
  render () {
    // not best way of getting data but it works
    let pokemon = this.props.data

    if (!pokemon) {
      return <View></View>
    }
    return(
      <ImageBackground
          style = { styles.backgroundImage }
          source = {{ uri: "http://pokemongolive.com/img/posts/raids_loading.png" }}>
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
                <Text style = {{ fontWeight: 'bold' }}>Size</Text>
              </ListItem>
              <ListItem>
                <Text>Weight: { pokemon.weight/10 } kg | { Math.round((pokemon.weight/10 * 2.205) * 100)/100 } lbs</Text>
              </ListItem>
              <ListItem>
                <Text>Height: { pokemon.height/10 } m | { Math.round((pokemon.height/10* 39.37) * 100)/100 } in</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text style = {{ fontWeight: 'bold' }}>Abilities</Text>
              </ListItem>
              <List
                dataArray = { pokemon.abilities }
                renderRow = { (item) =>
                  <ListItem>
                    <Text>{ item.ability.name }</Text>
                  </ListItem>
                }
              >
              </List>
            </View>
          </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: height,
    width: width
  },
  header: {
    fontSize: 30,
    opacity: 0.92,
    color: 'red',
    backgroundColor: 'white',
		textAlign: 'center',
    padding: '10px'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  img: {
    // https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native
    height: 200,
    width: 200,
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

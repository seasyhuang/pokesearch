// rcd
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Header, Item, Icon, Input, Button } from 'native-base';
// https://docs.nativebase.io/Components.html#header-def-headref


class Search extends React.Component {
  state = {
    pokeSearch: ""
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header
          searchBar = { true }
          rounded
        >
          <Item>
            <Icon name = 'ios-search' onPress = {this.searchPoke} ></Icon>
            <Input
              value = { this.state.pokeSearch }
              placeholder="Search Pokemon"
              onChangeText = { (pokeSearch) => this.setState({pokeSearch}) }
              />
          </Item>

        </Header>
      </View>
    )
  }
}

export default Search;

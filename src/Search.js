// rcd
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Header, Item, Icon, Input, Button } from 'native-base';
// https://docs.nativebase.io/Components.html#header-def-headref

import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';


class Search extends React.Component {
  state = {
    pokeSearch: "",
    onCall: false
  }
  searchPoke = () => {

  }
  renderBody = () => {
    if (this.state.onCall){
      return(
        <PokeLoader />
      )
    } else {
      return(
        <SearchBody />
      )
    }
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header
          searchBar={ true }
          rounded
          style={{ backgroundColor: '#DC3E3E'}}
        >
          <Item>
            <Icon name='ios-search' onPress = {this.searchPoke} ></Icon>
            <Input
              value={ this.state.pokeSearch }
              placeholder="Search Pokemon"
              onChangeText={ (pokeSearch) => this.setState({pokeSearch}) }
              />
          </Item>

        </Header>
        { this.renderBody() }
      </View>
    )
  }
}

export default Search;

// rcd

// import { Logs } from 'expo'
// Logs.enableExpoCliLogging()

import React from 'react'
import { View, Text } from 'react-native'
import { Header, Item, Icon, Input, Button } from 'native-base';
// https://docs.nativebase.io/Components.html#header-def-headref

import axios from 'axios';

import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';


class Search extends React.Component {
  state = {
    pokeSearch: "",
    onCall: true,
    data: {},
  }
  searchPoke = () => {
    // when it's loading, show the PokeLoader screen (logic is in renderBody)
    this.setState({ oncall: true });
    var self = this;
    axios.get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
      .then(function (response) {
        self.setState({ data: response.data });
        self.setState({ onCall: false });
      })
      .catch(function (error){
        console.log(error);
      })
  }
  renderBody = () => {
    if (this.state.onCall){
      return(
        <PokeLoader />
      )
    } else {
      return(
        <SearchBody data={ this.state.data } />
      )
    }
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header searchBar rounded
          style={{ backgroundColor: '#DC3E3E'}}
        >
          <Item>
            <Input
              value={ this.state.pokeSearch }
              placeholder="Search Pokemon"
              onChangeText={ (pokeSearch) => this.setState({ pokeSearch }) }
              />
            <Icon name='ios-search' onPress={ this.searchPoke } />
          </Item>

        </Header>
        { this.renderBody() }
      </View>
    )
  }
}

export default Search;

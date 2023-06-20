import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Cart from '../Components/Cart'


export default class Shop extends Component {
  render() {
    return (
      <View>
        <Text>Shop</Text>
        <Cart></Cart>
      </View>
    )
  }
}
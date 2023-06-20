import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SignUp from '../Components/SignUp'

export default class LogIn extends Component {
  render() {
    return (
      <View>
        <Text>LogIn</Text>
        <SignUp></SignUp>
      </View>
    )
  }
}
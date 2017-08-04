/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import LoginContainer from './src/container/login/logincontainer';

export default class GiftNow extends Component {
  render() {
    return (
      <LoginContainer />
    );
  }
}

AppRegistry.registerComponent('GiftNow', () => GiftNow);

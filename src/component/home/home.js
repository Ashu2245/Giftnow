import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import CustomHeader from '../header/header';


class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader onPress={this.props.handleBack} />
        <Text>Info Page</Text>
      </View>
    );
  }
}

export default HomeComponent;

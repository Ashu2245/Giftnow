import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'native-base';
import CustomHeader from '../header/header';


class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} titleText='Gift Now' headerStyle={{ backgroundColor: '#663399' }} iconstyle={{ fontSize: 22 }} iconname="menu" />
        <Text>Info Page</Text>
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ alignSelf: 'center', height: 95, width: 200, marginTop: 20 }} resizeMode="contain" source={require('../../image/icon.png')} />
        </View>
      </View>
    );
  }
}

export default HomeComponent;

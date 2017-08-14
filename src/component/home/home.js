import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Text } from 'native-base';
import CustomHeader from '../header/header';
import * as action from '../../action/action';


class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} titleText="Gift Now" headerStyle={{ backgroundColor: '#663399' }} iconstyle={{ fontSize: 22 }} iconname="menu" />
        <Text>Info Page</Text>
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ alignSelf: 'center', height: 95, width: 200, marginTop: 20 }} resizeMode="contain" source={require('../../image/icon.png')} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users,
  };
}
const mapDispatchToProps = dispatch => ({
  onLogin: (emailId, password) => dispatch(action.userLoginRequest(emailId, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Text } from 'native-base';
import CustomHeader from '../header/header';
import * as action from '../../action/action';
import TabsScrollableExample from '../scrolltab/scrolltab';
import { HEXCOLOR } from '../../style/hexcolor';

class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} titleText="Gift Now" headerStyle={{ backgroundColor: HEXCOLOR.CloudBurst }} iconstyle={{ fontSize: 22 }} iconname="menu" />
        <TabsScrollableExample />
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

import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Button, Icon, Thumbnail } from 'native-base';
import * as action from '../../action/action';


const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECF0F1',
  },
  logo: {
    flex: 1,
    height: 180,
    width: 175,
    alignSelf: 'center',
    // marginTop: 5,
  },
};
class DrawerContent extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' }),
      ],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Thumbnail style={{ marginTop: 10 }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/avatar-2/512/john_man_face-512.png' }} />
            <View style={{ marginLeft: 10, marginTop: 9, borderBottomWidth: 0.25, borderColor: 'grey', flex: 1 }} >
              <Text style={{ fontSize: 25, color: 'black' }}>{this.props.user.userLogin.data.name}</Text>
              <Text style={{ fontSize: 14.5, color: 'grey', marginBottom: 10 }}>{this.props.user.userLogin.data.email }</Text>
            </View>
          </View>
          <View style={{ marginTop: 40, marginLeft: 3 }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Icon name="ios-home-outline" />
              <Text style={{ fontSize: 16, marginTop: 2, marginLeft: 27 }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }}>
              <Icon name="ios-person-add-outline" />
              <Text style={{ fontSize: 16, marginTop: 2, marginLeft: 29 }}>
                Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }}>
              <Icon name="ios-settings-outline" />
              <Text style={{ fontSize: 16, marginTop: 2, marginLeft: 26 }}>
                Setting
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => { this.handleChange(); }} >
              <Icon name="ios-log-out-outline" />
              <Text style={{ fontSize: 16, marginTop: 2, marginLeft: 25 }}>
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  onSignout: email => dispatch(action.userLogoutRequest(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

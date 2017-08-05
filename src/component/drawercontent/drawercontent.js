import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  Text,
  View,
  Image,
} from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';


const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e3750',
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
  handlechange() {
    const email = { email: '' };
    const data = '';
    AsyncStorage.setItem('user', JSON.stringify(email));
    AsyncStorage.setItem('userdata', JSON.stringify(data));
    FCM.removeAllDeliveredNotifications();
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' }),
      ],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Button transparent info onPress={() => { this.handlechange(); }}>
          <Text style={{ fontSize: 16, color: 'white' }}>Change Email</Text>
        </Button>
      </ScrollView>
    );
  }
}
export default DrawerContent;

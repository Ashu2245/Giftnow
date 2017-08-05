import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  Text,
  View,
  Image,
} from 'react-native';
import { Button, Icon, Thumbnail } from 'native-base';
import { NavigationActions } from 'react-navigation';


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
        <View style={{marginTop:10, flexDirection:'row'}}>
           <Thumbnail  style={{marginTop:10}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/avatar-2/512/john_man_face-512.png'}} />
          <View style={{marginLeft:10,marginTop:9,borderBottomWidth:0.25,borderColor:'grey'}} >
            <Text style={{fontSize:25, color:'black'}}>Ashutosh Pandey</Text>
            <Text style={{fontSize:14.5, color:'grey',marginBottom:10}}>codeashu@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default DrawerContent;

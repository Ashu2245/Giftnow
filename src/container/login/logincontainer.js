import React, { Component } from 'react';
import { View, Image, ToastAndroid, AlertIOS, Platform, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LoginComponent from '../../component/login/login';

const { width } = Dimensions.get('window');

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(email) {
    this.setState({ email });
  }
  handlePassword(password) {
    this.setState({ password });
  }
  handleSignup() {
    this.props.navigation.navigate('Signup');
  }
  handleSubmit() {
    console.log('test');
    if (this.state.email == 'ashu@gmail.com' && this.state.password == '123') {
      if (Platform.OS === 'ios') {
        AlertIOS('Welcome User');
      } else if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity('welcome Ashutosh Pandey', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Drawer' }),
          ],
          key: 'Drawer',
        });
        this.props.navigation.dispatch(resetAction);
      }
    } else if (this.state.email === '' && this.state.password === '') {
      if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity('No User Found', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      } else if (Platform.OS === 'ios') {
        AlertIOS('Enter All Details');
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ width, flex: 1, borderColor: 'red' }} source={require('../../image/back.png')} >
          <LoginComponent
            email={this.state.email}
            password={this.state.password}
            handleEmail={this.handleEmail}
            handlePassword={this.handlePassword}
            handleSubmit={this.handleSubmit}
            handleSignup={this.handleSignup}
          />
        </Image>
      </View>
    );
  }
}

export default LoginContainer;

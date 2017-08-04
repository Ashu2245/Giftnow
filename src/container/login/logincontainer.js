import React, { Component } from 'react';
import { View, Image, ToastAndroid, AlertIOS, Platform, Dimensions } from 'react-native';

import LoginComponent from '../../component/login/login';

const { width } = Dimensions.get('window');

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      Password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(email) {
    this.setState({ email });
  }
  handlePassword(password) {
    this.setState({ password });
  }
  handleSubmit() {
    if (this.state.email !== '' && this.state.password !== '') {
      if (Platform.OS === 'ios') {
        AlertIOS('Welcome User');
      } else if (Platform.OS === 'android') {
        ToastAndroid('Welcome User', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
    } else if (this.state.email === '' && this.state.password === '') {
      if (Platform.OS === 'android') {
        ToastAndroid('Enter All Details', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
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
          />
        </Image>
      </View>
    );
  }
}

export default LoginContainer;

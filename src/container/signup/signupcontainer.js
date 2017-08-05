import React, { Component } from 'react';
import { View, Image, ToastAndroid, AlertIOS, Platform, Dimensions } from 'react-native';

import SignupComponent from '../../component/signup/signupcomponent';

const { width } = Dimensions.get('window');

class SignupContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      dob: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleDob = this.handleDob.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(email) {
    this.setState({ email });
  }
  handlePassword(password) {
    this.setState({ password });
  }
  handleName(name) {
    this.setState({ name });
  }
  handleDob(dob) {
    this.setState({ dob });
  }
  handleBack() {
    this.props.navigation.navigate('Login');
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
          <SignupComponent
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            dob={this.state.dob}
            handleName={this.handleName}
            handleEmail={this.handleEmail}
            handlePassword={this.handlePassword}
            handleDob={this.handleDob}
            handleSubmit={this.handleSubmit}
            handleBack={this.handleBack}
          />
        </Image>
      </View>
    );
  }
}

export default SignupContainer;

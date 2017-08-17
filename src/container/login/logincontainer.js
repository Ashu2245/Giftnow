import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, ToastAndroid, AlertIOS, Platform, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as action from '../../action/action';
import LoginComponent from '../../component/login/login';

const { width } = Dimensions.get('window');

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(props) {
    if (props.user.userLogin.isSuccess) {
      if (Platform.OS === 'ios') {
        AlertIOS('Welcome User');
      } else if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity('welcome User', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Drawer' }),
        ],
        key: 'Drawer',
      });
      this.props.navigation.dispatch(resetAction);
    } else if (props.user.userLogin.isError) {
      if (Platform.OS === 'ios') {
        AlertIOS(props.user.userLogin.error);
      } else if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity(props.user.userLogin.error, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
    }
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
    if (this.state.emaill !== '' && this.state.password !== '') {
      this.props.onLogin({ email: this.state.email, password: this.state.password });
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
function mapStateToProps(state) {
  return {
    user: state.users,
  };
}
const mapDispatchToProps = dispatch => ({
  onLogin: (emailId, password) => dispatch(action.userLoginRequest(emailId, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

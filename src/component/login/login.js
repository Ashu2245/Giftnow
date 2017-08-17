import React, { Component } from 'react';
import { View, Image, StatusBar, ScrollView } from 'react-native';
import { Text, Button, Icon, Item, Input, Label, Form } from 'native-base';
import { HEXCOLOR } from '../../style/hexcolor';
import style from './style';

class LoginComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        <StatusBar backgroundColor={HEXCOLOR.PickledBluewood} barStyle="light-content" />
        {/* <ScrollView> */}
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ alignSelf: 'center', height: 95, width: 200, marginTop: 60 }} resizeMode="contain" source={require('../../image/icon.png')} />
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <View>
            <Form>
              <Item floatingLabel >
                <Icon style={{ color: 'white' }} name="ios-person-outline" />
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Email</Label>
                <Input keyboardType="email-address" style={style.inputStyle} value={this.props.email} onChangeText={(email) => { this.props.handleEmail(email); }} />
              </Item>
              <Item floatingLabel >
                <Icon name="ios-lock-outline" style={{ color: 'white' }} />
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Password </Label>
                <Input secureTextEntry style={style.inputStyle} value={this.props.password} onChangeText={(password) => { this.props.handlePassword(password); }} />
              </Item>
              <Button rounded style={style.button} onPress={() => { this.props.handleSubmit(); }} >
                <Text style={style.buttonText}>Log In</Text>
              </Button>
            </Form>
          </View>
          {/* <View>
              <Button rounded style={style.googlebutton} onPress={() => { this.props.handleGoogleLogin(); }}>
            <Icon name="logo-google" style={{ color: 'blue' }} />
            <Text style={style.buttonText}>Login With Google</Text>
              </Button>
          </View> */}
          <View style={{ marginTop: 18, paddingBottom: 20, justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ marginTop: 12, color: 'grey', fontSize: 13 }}>Don't Have Account ?</Text>
            <Button transparent onPress={() => { this.props.handleSignup(); }}>
              <Text style={{ color: 'white', alignSelf: 'center' }}>Sign Up</Text>
            </Button>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}
export default LoginComponent;

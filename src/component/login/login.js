import React, { Component } from 'react';
import { View, Image, StatusBar, ActivityIndicator } from 'react-native';
import { Text, Button, Icon, Item, Input, Label, Form } from 'native-base';
import { HEXCOLOR } from '../../style/hexcolor';
import style from './style';

class LoginComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        <StatusBar backgroundColor={HEXCOLOR.PickledBluewood} barStyle="light-content" />
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ alignSelf: 'center', height: 95, width: 200, marginTop: 20 }} resizeMode="contain" source={require('../../image/icon.png')} />
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
          <View style={{ marginTop: 19, paddingBottom: 10, justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ marginTop: 12, color: 'grey', fontSize: 13 }}>Don't Have Account ?</Text>
            <Button transparent onPress={() => { this.props.handleSignup(); }}>
              <Text style={{ color: 'white', alignSelf: 'center' }}>Sign Up</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginComponent;

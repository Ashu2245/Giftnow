import React, { Component } from 'react';
import { View, Image, StatusBar, ActivityIndicator } from 'react-native';
import { Text, Button, Icon, Item, Input, Label, Form } from 'native-base';
import { HEXCOLOR } from '../../style/hexcolor';
import style from './style';

class LoginComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ alignSelf: 'center', height: 95, width: 200, marginTop: 20 }} resizeMode="contain" source={require('../../image/icon.png')} />
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <View>
            <Form>
              <Item floatingLabel >
                <Icon style={{ color: 'white' }} name="ios-person-outline" />
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Email</Label>
                <Input style={style.inputStyle} value={this.props.email} onChangeText={(email) => { this.props.handleEmail(email); }} />
              </Item>
              <Item floatingLabel >
                <Icon name="ios-lock-outline" style={{ color: 'white' }} />
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Password </Label>
                <Input secureTextEntry style={style.inputStyle} value={this.props.password} onChangeText={(password) => { this.props.handlePassword(password); }} />
              </Item>
              <Button rounded style={style.button} onPress={() => { this.props.handleSubmit; }} >
                <Text style={style.buttonText}>Login</Text>
              </Button>
            </Form>
          </View>
          {/* <View> */}
          <Text style={{ marginTop: 19, paddingBottom: 10, color: 'white', alignSelf: 'center' }}>Don't Have Account ? Signup</Text>
          {/* </View> */}
        </View>
      </View>
    );
  }
}

export default LoginComponent;

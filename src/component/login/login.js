import React, { Component } from 'react';
import { View, Image, StatusBar, ActivityIndicator } from 'react-native';
import { Text, Button, Item, Input, Label, Form } from 'native-base';
import { HEXCOLOR } from '../../style/hexcolor';
import style from './style';

class LoginComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ alignSelf: 'center', height: 120, width: 200 }} resizeMode="contain" source={require('../../image/icon.png')} />
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <View>
            <Form>
              <Item floatingLabel >
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Email</Label>
                <Input style={style.inputStyle} value={this.props.email} onChangeText={(text) => { this.props.handleEmail; }} />
              </Item>
              <Item floatingLabel >
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Password </Label>
                <Input secureTextEntry style={style.inputStyle} value={this.props.password} onChangeText={(text) => { this.props.handlePassword; }} />
              </Item>
              <Button rounded style={style.button} onPress={() => { this.props.handleSubmit; }} >
                <Text style={style.buttonText}>Login</Text>
              </Button>
            </Form>
          </View>
          <View />
        </View>
      </View>
    );
  }
}

export default LoginComponent;

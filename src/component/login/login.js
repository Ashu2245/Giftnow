import React, { Component } from 'react';
import { View, Image, StatusBar, ActivityIndicator } from 'react-native';
import { Text, Button, Item, Input, Label, Form } from 'native-base';
import { HEXCOLOR } from '../../style/hexcolor';
import style from './style';

class LoginComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDireaction: 'row' }}>
        <View style={{ justifyContent: 'center' }}>
          <Image style={{ alignSelf: 'center', height: 120, width: 200 }} resizeMode="contain" source="" />
        </View>
        <View>
          <View style={{ alignItem: 'center' }} >
            <Form>
              <Item floatingLabel >
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Enter Your Email</Label>
                <Input style={style.inputStyle} onChangeText={(text) => { }} />
              </Item>
              <Item floatingLabel >
                <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Registration Id </Label>
                <Input style={style.inputStyle} onChangeText={(text) => { }} />
              </Item>
              <Button rounded style={style.button} onPress={() => { }} >
                <Text style={style.buttonText}>Go</Text>
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

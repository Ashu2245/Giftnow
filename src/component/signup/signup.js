import React, { Component } from 'react';
import { View, Image, StatusBar, ActivityIndicator, ScrollView } from 'react-native';
import { Text, Button, Icon, Item, Input, Label, Form } from 'native-base';
import { HEXCOLOR } from '../../style/hexcolor';
import CustomHeader from '../header/header';
import style from './style';

class SignupComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader onPress={this.props.handleBack} titleText="Create Account" headerStyle={{ backgroundColor: 'transparent' }} iconstyle={{ fontSize: 38 }} iconname="ios-arrow-round-back" />
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
          <ScrollView>
            <StatusBar backgroundColor={HEXCOLOR.PickledBluewood} barStyle="light-content" />
            <View style={{ justifyContent: 'center' }}>
              <Image style={{ alignSelf: 'center', height: 95, width: 200, marginTop: 20 }} resizeMode="contain" source={require('../../image/icon.png')} />
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <View>
                <Form>
                  <Item floatingLabel >
                    <Icon style={{ color: 'white' }} name="ios-person-outline" />
                    <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Name</Label>
                    <Input style={style.inputStyle} value={this.props.name} onChangeText={(name) => { this.props.handleName(name); }} />
                  </Item>
                  <Item floatingLabel >
                    <Icon style={{ color: 'white' }} name="ios-mail-outline" />
                    <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Email</Label>
                    <Input style={style.inputStyle} value={this.props.email} onChangeText={(email) => { this.props.handleEmail(email); }} />
                  </Item>
                  <Item floatingLabel >
                    <Icon name="ios-lock-outline" style={{ color: 'white' }} />
                    <Label style={{ marginLeft: 5, justifyContent: 'center', color: HEXCOLOR.WhiteColor }}> Password </Label>
                    <Input secureTextEntry style={style.inputStyle} value={this.props.password} onChangeText={(password) => { this.props.handlePassword(password); }} />
                  </Item>
                  <Button rounded style={style.button} onPress={() => { this.props.handleSubmit(); }} >
                    <Text style={style.buttonText}>Create</Text>
                  </Button>
                </Form>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default SignupComponent;

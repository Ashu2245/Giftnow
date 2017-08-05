import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';
import style from './style';
import { HEXCOLOR } from '../../style/hexcolor';

export default class CustomHeader extends Component {
  render() {
    return (
      <Header androidStatusBarColor={HEXCOLOR.PickledBluewood} style={style.headerColor}>
        <Left>
          {/* <Thumbnail small source={require('../../image/icon.png')} /> */}
          <Button transparent>
            <Icon
              style={{ fontSize: 38 }}
              onPress={() => {
                this.props.onPress();
              }}
              name="ios-arrow-round-back"
            />
          </Button>
        </Left>
        <Body>
          <Title>
            <Text style={style.headerTitle}>Create Account</Text>
          </Title>
        </Body>
        <Right>
          {/* <Button transparent>
            <Icon
              onPress={() => {
            this.props.onPress();
              }}
              name="menu"
            />
          </Button> */}
        </Right>
      </Header>
    );
  }
}
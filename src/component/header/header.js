import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';
import style from './style';
import { HEXCOLOR } from '../../style/hexcolor';

export default class CustomHeader extends Component {
  render() {
    return (
      <Header androidStatusBarColor={HEXCOLOR.CloudBurst} style={this.props.headerStyle}>
        <Left>
          <Button transparent>
            <Icon
              style={this.props.iconstyle}
              onPress={() => {
                this.props.onPress();
              }}
              name={this.props.iconname}
            />
          </Button>
        </Left>
        <Body>
          <Title>
            <Text style={style.headerTitle}>{this.props.titleText}</Text>
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

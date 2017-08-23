import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Text } from 'native-base';
import { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { View } from 'react-native';
import { HEXCOLOR } from '../../style/hexcolor';

class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Tabs
          style={{ color: HEXCOLOR.WhiteColor }}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <Tab
            tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}

            activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Ashutosh"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            // textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Saurabh"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            // textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Ashish"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            // textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Shubham"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            // textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Faishal"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            // textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Manish"
          >
            <Text>hello</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default TabsScrollableExample;

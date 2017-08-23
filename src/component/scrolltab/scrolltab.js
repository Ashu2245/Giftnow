import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Text } from 'native-base';
import { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { View } from 'react-native';
import { HEXCOLOR } from '../../style/hexcolor';
import AddDetails from '../form/adddetails';

class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Tabs
          renderTabBar={() => <ScrollableTabBar />}
        >
          <Tab
            tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            textStyle={{ color: HEXCOLOR.WhiteColor }}
            activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Ashutosh"
          >
            <AddDetails />
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
            textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Ashish"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Shubham"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            textStyle={{ color: HEXCOLOR.WhiteColor }}
            // activeTextStyle={{ color: HEXCOLOR.BahamaBlue }}
            // tabBarUnderlineStyle={{ color: HEXCOLOR.FeijoaColor }}
            heading="Faishal"
          >
            <Text>hello</Text>
          </Tab>
          <Tab
            // tabStyle={{ backgroundColor: HEXCOLOR.FeijoaColor }}
            // activeTabStyle={{ backgroundColor: HEXCOLOR.BahamaBlue }}
            textStyle={{ color: HEXCOLOR.WhiteColor }}
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

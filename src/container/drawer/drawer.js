import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeComponent from '../../component/home/home';
import DrawerContent from '../../component/drawercontent/drawercontent';


const Home = DrawerNavigator({
  home: { screen: HomeComponent },
},
{
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <DrawerContent {...props} />,
});

export default Home;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FriendsStack from '../stacks/FriendsStack';

import CustomDrawer from './CustomDrawer';
import HomeTab from '../Tabs/HomeTab';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerContentOptions={{
        labelStyle: {
          fontSize: 16,
          alignItems: 'center',
        },
        itemStyle: {
          marginLeft: 10,
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: () => <IonIcon name="home-outline" size={24} />,
        }}
        component={HomeTab}
      />
      <Drawer.Screen
        name="Friends"
        options={{
          drawerIcon: () => <FontAwesome5 name="user-friends" size={24} />,
        }}
        component={FriendsStack}
      />
    </Drawer.Navigator>
  );
};

export default Main;

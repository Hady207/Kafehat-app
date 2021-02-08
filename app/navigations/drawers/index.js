import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Chat from '_screens/Chat';

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
        name="Favorites"
        options={{
          drawerIcon: () => <IonIcon name="heart-outline" size={24} />,
        }}
        component={Chat}
      />
      <Drawer.Screen
        name="Logout"
        options={{
          drawerLabel: 'Logout',
          drawerIcon: () => <IonIcon name="log-out-outline" size={24} />,
        }}
        component={Chat}
      />
    </Drawer.Navigator>
  );
};

export default Main;

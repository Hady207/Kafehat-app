import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcon from 'react-native-vector-icons/Ionicons';

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
      {/* <Drawer.Screen
        name="Favorites"
        options={{
          drawerIcon: () => <IonIcon name="heart-outline" size={24} />,
        }}
        component={FavoriteStack}
      />
      <Drawer.Screen
        name="Myorders"
        options={{
          drawerLabel: 'My Orders',
          drawerIcon: () => <FontIcon name="barcode" size={24} />,
        }}
        component={MyorderStack}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerIcon: () => <IonIcon name="settings-outline" size={24} />,
        }}
        component={SettingsStack}
      /> */}
    </Drawer.Navigator>
  );
};

export default Main;

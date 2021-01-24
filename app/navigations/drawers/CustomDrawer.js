import React, { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { T } from '_atoms';
import { Avatar, Switch } from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <DrawerContentScrollView {...props}>
      <Pressable style={styles.profileSection}>
        <Avatar.Image
          style={styles.avatarStyle}
          size={85}
          source={{ uri: 'https://source.unsplash.com/random/800x600' }}
        />
        <T title="Hadi Maher" />
      </Pressable>
      <DrawerItemList {...props} />
      <View style={styles.switchSection}>
        <T
          style={styles.switchTextStyle}
          title={isSwitchOn ? 'Light Mode' : 'Dark Mode'}
        />
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 15,
  },
  avatarStyle: {
    elevation: 5,
    marginBottom: 10,
  },
  switchSection: {
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  switchTextStyle: {
    marginLeft: 10,
    fontSize: 16,
  },
});
export default CustomDrawer;

import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Switch } from 'react-native';
import { T } from '_atoms';
import { Avatar, Icon } from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import RootSelectors from '_screens/RootScreen/selectors';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  RootScreenTypes,
  RootScreenActions,
} from '_screens/RootScreen/reducer';

const CustomDrawer = (props) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const { userProfile } = useSelector(RootSelectors);
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      {userProfile && (
        <Pressable style={styles.profileSection}>
          <Avatar
            rounded
            size="large"
            source={{ uri: 'https://source.unsplash.com/random/800x600' }}
          />
          <T title={userProfile?.username} />
        </Pressable>
      )}
      <DrawerItemList {...props} />
      <View style={styles.switchSection}>
        <T
          style={styles.switchTextStyle}
          title={isSwitchOn ? 'Light Mode' : 'Dark Mode'}
        />
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onToggleSwitch}
          value={isSwitchOn}
        />
      </View>
      <Pressable
        onPress={() => dispatch(RootScreenActions.signOut())}
        style={styles.logoutButton}>
        <IonIcon name="log-out-outline" size={24} />
        <T title="logout" />
      </Pressable>
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
  logoutButton: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
export default CustomDrawer;

import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Switch } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { Avatar, Icon } from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';

import { T } from '_atoms';
import { LanguageModal } from '_molecules';
import { RootScreenActions } from '_containers/RootScreen/reducer';
import RootSelectors from '_containers/RootScreen/selectors';

const CustomDrawer = (props) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const { userProfile } = useSelector(RootSelectors);
  const dispatch = useDispatch();

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const handleModal = () => setLangModal((prevValue) => !prevValue);

  return (
    <DrawerContentScrollView {...props}>
      {userProfile && (
        <Pressable style={styles.profileSection}>
          <Avatar rounded size="large" source={{ uri: userProfile?.picture }} />
          <T title={userProfile?.name} />
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
      <Pressable style={{ marginLeft: 16 }} {...props} onPress={handleModal}>
        <T id="language" />
      </Pressable>
      <Pressable
        onPress={() => dispatch(RootScreenActions.signOut())}
        style={styles.logoutButton}>
        <IonIcon name="log-out-outline" size={24} />
        <T id="logout" />
      </Pressable>
      <LanguageModal visible={langModal} visibleFun={handleModal} />
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

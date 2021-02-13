import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import RootSelectors from '_screens/RootScreen/selectors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import LoginScreen from '_screens/Login';
import SignUpScreen from '_screens/Signup';

const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
  const { isSignOut } = useSelector(RootSelectors);
  const headerOptions = {
    headerTitle: '',
    headerStyle: { elevation: 0, shadowOpacity: 0 },
    animationTypeForReplace: isSignOut ? 'pop' : 'push',
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={headerOptions}
      />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

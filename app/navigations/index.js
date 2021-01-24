import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './drawers';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import rootSelectors from '_screens/RootScreen/selectors';
import SplashScreen from '_screens/SplashScreen';
import MainNavigator from './drawers';
import AuthStack from './stacks/AuthStack';

const Stack = createStackNavigator();

// the root navigator will be here
const RootNavigator = () => {
  const { accessToken, isLoading } = useSelector(rootSelectors);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {accessToken ? (
          <Stack.Screen
            name="MainNavigator"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

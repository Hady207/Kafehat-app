import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { T } from '_atoms';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HomeStack from '../stacks/HomeStack';
import MyTabBar from './MyTabBar';

const BottomBar = createBottomTabNavigator();

const AdvanceButton = (props) => (
  <View style={styles.AdvanceButtonContainer}>
    <View style={styles.buttonbg}>
      <Pressable {...props} style={styles.buttonItself} />
    </View>
  </View>
);

const HomeTab = () => {
  return (
    <BottomBar.Navigator>
      <BottomBar.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="ios-home-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomBar.Screen
        name="Map"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="ios-map-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomBar.Screen
        name="Mood"
        component={HomeStack}
        options={{
          tabBarButton: (props) => <AdvanceButton {...props} />,
          tabBarLabel: ({ focused, color }) => (
            <T id="mood" color={focused ? color : 'white'} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="mood" color={color} size={size} />
          ),
        }}
      />
      <BottomBar.Screen
        name="Messages"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCIcon
              name="message-text-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomBar.Screen
        name="Settings"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="ios-settings-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomBar.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },

  AdvanceButtonContainer: {
    position: 'relative',
    alignItems: 'center',
    width: 75,
  },
  buttonbg: { position: 'absolute', top: 0 },
  buttonItself: {
    height: 50,
    width: 50,
    backgroundColor: '#E94F37',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    top: -22,
    color: 'white',
  },
});

import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import HomeScreen from '_containers/Home';
import CafeScreen from '_containers/Cafe';
import CameraScreen from '_containers/Camera';

const Stack = createSharedElementStackNavigator();
const HomeStack = ({ navigation }) => {
  const headerOptions = {
    headerTitle: '',
    headerStyle: { elevation: 0, shadowOpacity: 0 },
    headerLeft: (props) => (
      <Pressable {...props} onPress={navigation.toggleDrawer}>
        <IonIcon name="menu-sharp" size={25} />
      </Pressable>
    ),
    headerRight: (props) => (
      <View style={styles.buttonContainer}>
        <Pressable {...props}>
          <EntypoIcon name="share-alternative" size={22} />
        </Pressable>
      </View>
    ),
    headerLeftContainerStyle: {
      marginLeft: 10,
    },
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Cafe"
        component={CafeScreen}
        sharedElementsConfig={(route, otherRoute, showing) => {
          return [
            {
              id: route.params.id,
              animation: 'fade',
              resize: 'auto',
            },
          ];
        }}
      />
      {/* <Stack.Screen name="Camera" component={CameraScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonElement: {
    marginHorizontal: 10,
  },
});

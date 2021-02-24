import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import FriendsScreen from '_containers/Friends';
import ChatScreen from '_containers/Chat';

const Stack = createStackNavigator();

const FriendStack = ({ navigation }) => {
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
        <Pressable {...props} onPress={() => navigation.navigate('Cart')}>
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
        name="Friends"
        component={FriendsScreen}
        options={headerOptions}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default FriendStack;

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

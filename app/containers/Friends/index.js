import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Image, FlatList, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { T } from '_atoms';
import { Colors } from '_styles';

import friendsSelector from './selectors';
import { FriendsActions } from './reducer';

const FriendsCard = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Chat', { email: item.email })}
      style={styles.card}>
      <Avatar
        rounded
        size="small"
        source={{ uri: 'https://source.unsplash.com/random/800x600' }}
      />
      <T title={item.name} />
    </Pressable>
  );
};

const Friends = ({ navigation }) => {
  const { friends, isLoading } = useSelector(friendsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FriendsActions.fetchFriendsRequest());
  }, [dispatch]);
  return (
    <View style={styles.screen}>
      {isLoading ? (
        <T title="Loading" />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={friends}
          renderItem={({ item }) => (
            <FriendsCard item={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  screen: { backgroundColor: Colors.background, flex: 1 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: 'red',
  },
});

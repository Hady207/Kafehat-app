import React from 'react';
import { StyleSheet, View } from 'react-native';

// import { useNavigation } from '@react-navigation/native';
import { HeaderList } from '_organisms';
import { Colors } from '_styles';

const Home = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <HeaderList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

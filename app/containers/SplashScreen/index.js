import React from 'react';
import { StyleSheet, View } from 'react-native';
import { T } from '_atoms';

const index = () => {
  return (
    <View style={styles.screen}>
      <T title="Hadi Maher" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  fontTitle: {
    fontSize: 25,
    color: 'white',
  },
});

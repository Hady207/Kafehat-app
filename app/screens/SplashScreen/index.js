import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.fontTitle}>Hadi Maher</Text>
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

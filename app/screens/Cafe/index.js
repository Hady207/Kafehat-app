import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cafe = () => {
  return (
    <View style={styles.screen}>
      <Text>Cafe Page here</Text>
    </View>
  );
};

export default Cafe;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

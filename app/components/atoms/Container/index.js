import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '_styles';

const Container = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

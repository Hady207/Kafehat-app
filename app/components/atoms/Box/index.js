import React from 'react';
import { StyleSheet, View } from 'react-native';

const Box = ({ boxStyle, children }) => {
  return <View style={[styles.box, { ...boxStyle }]}>{children}</View>;
};

export default Box;

const styles = StyleSheet.create({
  box: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

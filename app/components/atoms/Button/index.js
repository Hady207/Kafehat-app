import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const index = ({ outline, buttonStyle, ...props }) => {
  return (
    <Button
      type={outline ? 'outline' : 'solid'}
      buttonStyle={{ ...styles.button, ...buttonStyle }}
      {...props}
    />
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: 'green',
    height: 48,
  },
});

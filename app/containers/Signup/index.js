import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '_atoms';
const Signup = () => {
  return (
    <View>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Input placeholder="email" />
      <Button title="Signup" />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});

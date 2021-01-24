import React from 'react';
import { Text } from 'react-native';

const T = ({ id, title, textStyle }) => {
  return <Text style={textStyle}>{title}</Text>;
};

export default T;

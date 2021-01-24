import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

import { T, Box } from '_atoms';
import { Colors } from '_styles';

const Card = ({
  cardStyle,
  boxStyle,
  imageTextStyle,
  textStyle,
  boxTextStyle,
  image,
  box,
  id,
  title,
}) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Box boxStyle={boxStyle}>
        {image ? (
          <ImageBackground style={styles.image} source={{ uri: image }}>
            <T textStyle={imageTextStyle} id={id} title={title} />
          </ImageBackground>
        ) : (
          <T textStyle={textStyle} id={id} title={title} />
        )}
      </Box>
      {box && (
        <View style={styles.box}>
          <T textStyle={boxTextStyle} id={id} title={title} />
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginHorizontal: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: Colors.background,
    padding: 5,
  },
});

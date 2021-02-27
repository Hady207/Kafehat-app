import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, T } from '_atoms';
import { Image } from 'react-native-elements';

const ItemDetail = ({ cafe }) => {
  return (
    <Container style={styles.screen}>
      <SharedElement id={cafe._id}>
        <Image
          style={styles.ImageStyle}
          source={{
            uri: cafe.primaryImage,
          }}
        />
      </SharedElement>
      <View style={styles.infoContainer}>
        <T title={cafe.name} />
      </View>
    </Container>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  ImageStyle: { height: 250, width: '100%' },
  infoContainer: {
    marginTop: 10,
  },
});

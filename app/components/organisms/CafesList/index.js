import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { T } from '_atoms';
import { Card } from '_molecules';

const CafesList = ({ cafesData }) => {
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <SharedElement id={item._id}>
      <Card
        onPress={() => navigation.navigate('Cafe', { id: item._id })}
        cardStyle={styles.card}
        title={item.name}
        imageTextStyle={styles.textStyle}
        image={item.primaryImage}
      />
    </SharedElement>
  );

  return (
    <View style={styles.list}>
      <T title="Cafes" />
      <FlatList
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        data={cafesData}
        horizontal
        renderItem={renderCard}
      />
    </View>
  );
};

export default CafesList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
  },
  card: {
    height: 200,
    width: 250,
  },
});

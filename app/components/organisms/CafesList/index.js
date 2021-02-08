import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { T } from '_atoms';
import { Card } from '_molecules';

const renderCard = ({ item }) => (
  <Card
    cardStyle={styles.card}
    boxStyle={styles.boxStyle}
    title={item.name}
    imageTextStyle={styles.textStyle}
    image={item.image}
  />
);

const CafesList = ({ cafesData }) => {
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
  list: {},
});

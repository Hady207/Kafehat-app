import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Card } from '_molecules';
import { Colors } from '_styles';

const RENDERDATA = [
  {
    name: 'product1',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'product2',
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'product3',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1514&q=80',
  },
  {
    name: 'product4',
    image:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80',
  },
  {
    name: 'product5',
    image:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80',
  },
  {
    name: 'product6',
    image:
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
  },
];

const renderCard = ({ item }) => (
  <Card
    cardStyle={styles.card}
    boxStyle={styles.boxStyle}
    title={item.name}
    imageTextStyle={styles.textStyle}
    image={item.image}
  />
);

const HeaderList = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        data={RENDERDATA}
        horizontal
        renderItem={renderCard}
      />
    </View>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  screen: { padding: 5 },
  boxStyle: {
    height: 150,
    width: 200,
  },
  card: {
    marginHorizontal: 10,
  },
  textStyle: { color: Colors.background },
});

import React, { useState, useEffect } from 'react';
import { storageRead } from '_utils/storageUtils';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// import { useNavigation } from '@react-navigation/native';
import { HeaderList, CafesList } from '_organisms';
import { Colors } from '_styles';
import { HomeTypes, HomeActions } from './reducer';

const Home = () => {
  // const navigation = useNavigation();

  // const homeSelector = useSelector((state) => state.home);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(HomeActions.fetchRequest());
  // }, [dispatch]);

  return (
    <View style={styles.root}>
      <HeaderList />
      <CafesList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

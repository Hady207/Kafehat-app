import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { CafeItemDetail } from '_organisms';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { cafeSelector } from './selectors';

const Cafe = () => {
  const route = useRoute();
  const selectCafe = useMemo(cafeSelector, []);
  const cafeData = useSelector((state) => selectCafe(state, route.params.id));

  return <CafeItemDetail cafe={cafeData} />;
};

export default Cafe;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

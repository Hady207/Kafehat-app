import React, { useEffect, useMemo } from 'react';
import { storageRead } from '_utils/storageUtils';
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '_atoms';
import { useNavigation } from '@react-navigation/native';
import { HeaderList, CafesList } from '_templates/Home';
import { Colors } from '_styles';
import RootSelectors from '_containers/RootScreen/selectors';
import {
  initiateOnlineSocket,
  userIsOnline,
  disconnectSocket,
} from '_utils/chatUtil';
import homeSelectors from './selectors';
import { HomeActions } from './reducer';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Home = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const { cafes, isLoading } = useSelector(homeSelectors);
  const { userProfile } = useSelector(RootSelectors);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   initiateOnlineSocket();
  //   console.log('first useEffect called');
  //   return () => disconnectSocket();
  // }, []);

  useEffect(() => {
    dispatch(HomeActions.fetchHomeRequest());
    userIsOnline(userProfile.email);
    console.log('second useEffect called');
  }, [dispatch, userProfile]);

  return (
    <Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HeaderList />
        {isLoading ? <ActivityIndicator /> : <CafesList cafesData={cafes} />}
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

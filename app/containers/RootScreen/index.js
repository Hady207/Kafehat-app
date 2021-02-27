import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storageRead } from '_utils/storageUtils';
import RootNavigator from '_navigations';
import {
  RootScreenTypes,
  RootScreenActions,
} from '_containers/RootScreen/reducer';

const RootScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // dispatch(RootScreenActions.startUp());
      let accessToken;
      try {
        accessToken = await storageRead('accessToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch(RootScreenActions.restoreToken(accessToken));
    };

    bootstrapAsync();
    console.log('root useEffect called');
  }, [dispatch]);

  return <RootNavigator />;
};

export default RootScreen;

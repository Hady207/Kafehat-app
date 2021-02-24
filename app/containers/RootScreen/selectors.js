import { createSelector, createStructuredSelector } from 'reselect';
import { initalState } from './reducer';

const rootScreenSelector = (state) => state.root ?? initalState;

export const selectAccessToken = () =>
  createSelector(rootScreenSelector, (substate) => substate.accessToken);

export const selectRefreshToken = () =>
  createSelector(rootScreenSelector, (substate) => substate.refreshToken);

export const selectIsloading = () =>
  createSelector(rootScreenSelector, (substate) => substate.isLoading);

export const selectUserProfile = () =>
  createSelector(rootScreenSelector, (substate) => substate.userProfile);

export const selectSignOutIndicator = () =>
  createSelector(rootScreenSelector, (substate) => substate.isSignOut);

export const selectErrorMessage = () =>
  createSelector(rootScreenSelector, (substate) => substate.error);

const rootSelectors = createStructuredSelector({
  accessToken: selectAccessToken(),
  isLoading: selectIsloading(),
  userProfile: selectUserProfile(),
  isSignOut: selectSignOutIndicator(),
  errorMessage: selectErrorMessage(),
});

export default rootSelectors;

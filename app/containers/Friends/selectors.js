import { createSelector, createStructuredSelector } from 'reselect';
import { initalState } from './reducer';

const friendsRootSelector = (state) => state.friends ?? initalState;

export const selectIsloading = () =>
  createSelector(friendsRootSelector, (substate) => substate.isLoading);

export const selectFriends = () =>
  createSelector(friendsRootSelector, (substate) => substate.friends);

export const selectErrorMessage = () =>
  createSelector(friendsRootSelector, (substate) => substate.errorMessage);

const firendsSelector = createStructuredSelector({
  isLoading: selectIsloading(),
  friends: selectFriends(),
  errorMessage: selectErrorMessage(),
});

export default firendsSelector;

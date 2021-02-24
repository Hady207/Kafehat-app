import { createSelector, createStructuredSelector } from 'reselect';
import { initalState } from './reducer';

const homeRootSelector = (state) => state.home ?? initalState;

export const cafeSelector = () =>
  createSelector(homeRootSelector, (substate) => substate.cafe);

export const isLoadingSelector = () =>
  createSelector(homeRootSelector, (substate) => substate.isLoading);

export const errorMessageSelector = () =>
  createSelector(homeRootSelector, (substate) => substate.errorMessage);

const homeSelectors = createStructuredSelector({
  cafes: cafeSelector(),
  isLoading: isLoadingSelector(),
  errorMessage: errorMessageSelector(),
});

export default homeSelectors;

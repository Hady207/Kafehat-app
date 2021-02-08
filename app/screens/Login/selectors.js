import { createSelector, createStructuredSelector } from 'reselect';
import { initalState } from './reducer';

const loginRootSelector = (state) => state.login ?? initalState;

export const selectLoginIsloading = () =>
  createSelector(loginRootSelector, (substate) => substate.loginIsLoading);

export const selectLoginErrorMessage = () =>
  createSelector(loginRootSelector, (substate) => substate.loginErrorMessage);

const loginSelectors = createStructuredSelector({
  loginIsLoading: selectLoginIsloading(),
  errorMessage: selectLoginErrorMessage(),
});

export default loginSelectors;

import { createSelector, createStructuredSelector } from 'reselect';
import { initalState } from './reducer';

const loginRootSelector = (state) => state.login ?? initalState;

export const selectLoginIsloading = () =>
  createSelector(loginRootSelector, (substate) => substate.loginIsLoading);

export const selectSkipLogin = () =>
  createSelector(loginRootSelector, (substate) => substate.skipLogin);

export const selectLoginErrorMessage = () =>
  createSelector(loginRootSelector, (substate) => substate.loginErrorMessage);

const loginSelectors = createStructuredSelector({
  loginIsLoading: selectLoginIsloading(),
  errorMessage: selectLoginErrorMessage(),
  skipLogin: selectSkipLogin(),
});

export default loginSelectors;

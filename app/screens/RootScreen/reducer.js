import { createActions } from 'reduxsauce';
import immer from 'immer';

export const {
  Types: RootScreenTypes,
  Creators: RootScreenActions,
} = createActions({
  startUp: null,
  signIn: ['user', 'accessToken', 'refreshToken'],
  restoreToken: ['accessToken'],
  signOut: null,
});

export const initalState = {
  isLoading: false,
  userProfile: null,
  accessToken: null,
  refreshToken: null,
  isSignOut: false,
  error: null,
};

export const rootScreenReducer = (state = initalState, action) => {
  switch (action.type) {
    case RootScreenTypes.START_UP:
      return { ...state, isLoading: true };
    case RootScreenTypes.SIGN_IN:
      return {
        ...state,
        isLoading: false,
        isSignOut: false,
        userProfile: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case RootScreenTypes.RESTORE_TOKEN:
      return { ...state, isLoading: false, accessToken: action.accessToken };
    case RootScreenTypes.SIGN_OUT:
      return {
        ...state,
        userProfile: null,
        accessToken: null,
        refreshToken: null,
        isSignOut: true,
      };
    default:
      return state;
  }
};

import { createActions } from 'reduxsauce';
import immer from 'immer';

export const { Types: LoginTypes, Creators: LoginActions } = createActions({
  requestLogin: ['email', 'password'],
  googleLogin: ['userInfo'],
  facebookLogin: ['facebookId'],
  loginSuccess: null,
  skip: null,
  loginFail: ['errorMessage'],
});

export const initalState = {
  loginIsLoading: false,
  skipLogin: false,
  loginErrorMessage: null,
};

export const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case LoginTypes.REQUEST_LOGIN:
    case LoginTypes.GOOGLE_LOGIN:
    case LoginTypes.FACEBOOK_LOGIN:
      return { ...state, loginIsLoading: true };
    case LoginTypes.SKIP:
      return { ...state, skipLogin: true };
    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginIsLoading: false,
      };
    case LoginTypes.LOGIN_FAIL:
      return {
        ...state,
        loginIsLoading: false,
        loginErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

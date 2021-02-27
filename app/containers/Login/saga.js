import { put, call, takeLatest } from 'redux-saga/effects';
import { storageWrite } from '_utils/storageUtils';
import {
  loginService,
  googleLoginService,
  facebookLoginService,
} from '_services/AuthService';
import { RootScreenActions } from '_containers/RootScreen/reducer';
import { LoginTypes, LoginActions } from './reducer';

function* loginSaga(action) {
  try {
    const response = yield call(loginService, action);
    if (response.ok) {
      yield call(storageWrite, 'accessToken', response.data?.token.accessToken);
      yield call(
        storageWrite,
        'refreshToken',
        response.data?.token.refreshToken,
      );
      yield put(
        RootScreenActions.signIn(
          response.data?.user,
          response.data?.token.accessToken,
          response.data?.token.refreshToken,
        ),
      );
      yield put(LoginActions.loginSuccess());
    } else {
      yield put(LoginActions.loginFail(response.data.message));
    }
  } catch (error) {
    console.log(error);
  }
}

function* googleLoginSaga(action) {
  try {
    const response = yield call(googleLoginService, action);
    if (response.ok) {
      yield call(storageWrite, 'accessToken', response.data?.token.accessToken);
      yield call(
        storageWrite,
        'refreshToken',
        response.data?.token.refreshToken,
      );
      yield put(
        RootScreenActions.signIn(
          response.data?.user,
          response.data?.token.accessToken,
          response.data?.token.refreshToken,
        ),
      );
    }
    yield put(LoginActions.loginSuccess());
  } catch (error) {
    console.log(error);
  }
}

export function* facebookLoginSaga(action) {
  try {
    const response = yield call(facebookLoginService, action);
    if (response.ok) {
      yield call(storageWrite, 'accessToken', response.data?.token.accessToken);
      yield call(
        storageWrite,
        'refreshToken',
        response.data?.token.refreshToken,
      );
      yield put(
        RootScreenActions.signIn(
          response.data?.user,
          response.data?.token.accessToken,
          response.data?.token.refreshToken,
        ),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* loginRootWacher() {
  yield takeLatest(LoginTypes.REQUEST_LOGIN, loginSaga);
  yield takeLatest(LoginTypes.GOOGLE_LOGIN, googleLoginSaga);
  yield takeLatest(LoginTypes.FACEBOOK_LOGIN, facebookLoginSaga);
}

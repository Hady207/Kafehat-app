import { put, call, takeLatest } from 'redux-saga/effects';
import { storageWrite } from '_utils/storageUtils';
import { loginService } from '_services/AuthService';
import { RootScreenActions } from '_screens/RootScreen/reducer';
import { LoginTypes, LoginActions } from './reducer';

function* loginSaga(action) {
  try {
    const response = yield call(loginService, action);
    console.log(response);
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

export default function* loginRootWacher() {
  yield takeLatest(LoginTypes.REQUEST_LOGIN, loginSaga);
}

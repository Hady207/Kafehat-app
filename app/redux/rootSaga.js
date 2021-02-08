import { fork } from 'redux-saga/effects';
import rootSaga from '_screens/RootScreen/saga';
import loginSaga from '_screens/Login/saga';
import homeSaga from '_screens/Home/saga';

export default function* root() {
  yield fork(rootSaga);
  yield fork(loginSaga);
  yield fork(homeSaga);
}

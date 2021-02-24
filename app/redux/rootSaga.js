import { fork } from 'redux-saga/effects';
import rootSaga from '_containers/RootScreen/saga';
import loginSaga from '_containers/Login/saga';
import homeSaga from '_containers/Home/saga';
import friendsSaga from '_containers/Friends/saga';

export default function* root() {
  yield fork(rootSaga);
  yield fork(loginSaga);
  yield fork(homeSaga);
  yield fork(friendsSaga);
}

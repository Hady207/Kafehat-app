import { fork } from 'redux-saga/effects';
import homeSaga from '_screens/Home/saga';

export default function* root() {
  yield fork(homeSaga);
}

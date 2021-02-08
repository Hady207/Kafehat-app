import { call, put, takeLatest } from 'redux-saga/effects';
import { storageDelete } from '_utils/storageUtils';
import { RootScreenTypes, RootScreenActions } from './reducer';

export function* clearStorageSaga() {
  try {
    yield call(storageDelete, 'accessToken');
    yield call(storageDelete, 'refreshToken');
  } catch (error) {
    console.log(error);
  }
}

export default function* rootScreenSaga() {
  yield takeLatest(RootScreenTypes.SIGN_OUT, clearStorageSaga);
}

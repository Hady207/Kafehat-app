import { put, call, takeLatest } from 'redux-saga/effects';
import { getHomeCafes } from '_services/HomeService';
import { HomeTypes, HomeActions } from './reducer';

function* getHomeSaga() {
  try {
    const response = yield call(getHomeCafes);
    yield put(HomeActions.fetchSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* homeRootWatcher() {
  yield takeLatest(HomeTypes.FETCH_REQUEST, getHomeSaga);
}

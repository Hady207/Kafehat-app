import { put, call, takeLatest } from 'redux-saga/effects';
import { getHomeCafes } from '_services/HomeService';
import { HomeTypes, HomeActions } from './reducer';

function* getHomeSaga() {
  try {
    const response = yield call(getHomeCafes);
    yield put(HomeActions.fetchHomeSuccess(response.data.result));
  } catch (error) {
    console.log('error', error);
    yield put(HomeActions.fetchHomeFail(error));
  }
}

export default function* homeRootWatcher() {
  yield takeLatest(HomeTypes.FETCH_HOME_REQUEST, getHomeSaga);
}

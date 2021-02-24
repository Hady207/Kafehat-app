import { put, call, takeLatest } from 'redux-saga/effects';
import { listFriendsService } from '_services/FriendsService';
import { FriendsTypes, FriendsActions } from './reducer';

function* getFriendSaga() {
  try {
    const response = yield call(listFriendsService);
    yield put(FriendsActions.fetchSuccess(response.data?.friends));
  } catch (error) {
    yield put(FriendsActions.fetchFail(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(FriendsTypes.FETCH_REQUEST, getFriendSaga);
}

import {put, call, takeLatest} from 'redux-saga/effects';
import {HomeTypes, HomeActions} from './reducer';

function* getPosts() {
  try {
    console.log('fellow');
  } catch (error) {
    console.log(error);
  }
}

export default function* homeRootWatcher() {
  yield takeLatest(HomeTypes.FETCH_HOME, getPosts);
}

import { all } from 'redux-saga/effects';
import { startFetchCats, startCreateCat } from './animals';

export default function* rootSaga() {
  yield all([startFetchCats(), startCreateCat()]);
}

import { all } from 'redux-saga/effects';
import {
  startFetchCats,
  startCreateCat,
  startDeleteCat,
  startUpdateCat,
} from './animals';

export default function* rootSaga() {
  yield all([
    startFetchCats(),
    startCreateCat(),
    startDeleteCat(),
    startUpdateCat(),
  ]);
}

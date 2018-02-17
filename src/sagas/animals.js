import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const api = 'http://localhost:3001/cats';

// getall saga : fired on CATS:FETCH_ALL
function* fetchCats(action) {
  try {
    // api call
    const cats = yield call(axios.get, api);
    // if succeed
    yield put({ type: 'ANIMALS:FETCH_ALL:SUCCEED', cats: cats.data });
  } catch (e) {
    // if fail
    yield put({ type: 'ANIMALS:FETCH_ALL:FAIL' });
  }
}

/*
  Starts fetchCats on each dispatched 'CATS:FETCH_ALL' action
  Allows concurrent fetches of user
*/

function* mySaga() {
  yield takeEvery('CATS:FETCH_ALL', fetchCats);
}

/*
  Alternatively you can use takeLatest
  doesn't allow concurrent fetchs, if CATS:FETCH_ALL gets dispatched
  whiles a getch is already pending then the pending fetch is cancelled
  and only the lastest will be ran
*/

export function* mySagaLatest() {
  yield takeLatest('CATS:FETCH_ALL', fetchCats);
}

export default mySaga;

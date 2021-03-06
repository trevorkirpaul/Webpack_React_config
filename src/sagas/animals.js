import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const API_GET = 'http://localhost:3001/cats';
const API_POST = 'http://localhost:3001/cats';
const API_DELETE = 'http://localhost:3001/cats';
const API_PATCH = 'http://localhost:3001/cats';

// getall saga : fired on CATS:FETCH_ALL
function* fetchCats(action) {
  try {
    // api call
    const cats = yield call(axios.get, API_GET);
    // if succeed
    yield put({ type: 'ANIMALS:FETCH_ALL:SUCCEED', cats: cats.data });
  } catch (e) {
    // if fail
    yield put({ type: 'ANIMALS:FETCH_ALL:FAIL' });
  }
}

// create cat saga : fired on CATS:CREATE
function* createCat(action) {
  try {
    // api call
    const cat = yield call(axios.post, API_POST, { name: action.name });
    // if succeed
    yield put({ type: 'CAT:CREATE:SUCCEED', cat: cat.data });
  } catch (e) {
    yield put({ type: 'CAT:CREATE:FAIL', error: e });
  }
}

function* deleteCat(action) {
  try {
    // api call
    const cat = yield call(axios.delete, `${API_DELETE}/${action.id}`);
    // if success
    yield put({ type: 'CAT:DELETE:SUCCEED', cat: cat.data });
  } catch (e) {
    yield put({ type: 'CAT:DELETE:FAIL', error: e });
  }
}

function* updateCat(action) {
  try {
    // api call
    const cat = yield call(axios.patch, `${API_PATCH}/${action.id}`, {
      name: action.name,
    });
    // if success
    yield put({ type: 'CAT:UPDATE:SUCCEED', cat: cat.data });
  } catch (e) {
    yield put({ type: 'CAT:UPDATE:FAIL', error: e });
  }
}

/*
  Starts fetchCats on each dispatched 'CATS:FETCH_ALL' action
  Allows concurrent fetches of user
*/

export function* startFetchCats() {
  yield takeEvery('CATS:FETCH_ALL', fetchCats);
}

export function* startCreateCat() {
  yield takeEvery('CAT:CREATE', createCat);
}

export function* startDeleteCat() {
  yield takeLatest('CAT:DELETE', deleteCat);
}

export function* startUpdateCat() {
  yield takeLatest('CAT:UPDATE', updateCat);
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

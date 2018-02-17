import { takeEvery } from 'redux-saga';

/*
   1. our worker saga - doing async and returning response
   2. watcher saga - listens for dispatches to call workers
   3. root saga - take all watchers and combine to root
      single entry point to start all sagas
*/




// watcher saga - spawn a new task on each action
export default function* watchCreateLesson() {

}







// root saga
export default function* rootSaga() {
  yield [watchCreateLesson()];
}


import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import animals from './reducers/animals';
import saga from './sagas/rootSaga';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      animals,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  // run saga listener
  sagaMiddleware.run(saga);
  return store;
};

/*
  to add multiple middleware ledgibly
  use array
  
  const middleware = [sagaMiddleware, thunk]

  composeEnhancers(applyMiddleware(...middleware))
*/

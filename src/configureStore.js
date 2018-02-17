import { createStore, combineReducers, compose } from 'redux';
import animals from './reducers/animals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      animals,
    }),
    composeEnhancers()
  );
  return store;
};

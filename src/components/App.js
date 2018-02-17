import React from 'react';
import { Provider } from 'react-redux';
import configStore from '../configureStore';
import AppRouter from './router/AppRouter';

const store = configStore();

export default () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

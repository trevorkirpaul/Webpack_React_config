import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import Snippets from '../snippets/Snippets';
import Cat from '../testReducer/AnimalContainer';
import NotFound from '../404/NotFound';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/add-cat" component={Cat} />
          <Route exact path="/snippets" component={Snippets} />
          <Route exact path="/" component={Welcome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

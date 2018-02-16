import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../header/Header'
import Welcome from '../welcome/Welcome'
import NotFound from '../404/NotFound'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

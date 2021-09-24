import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Shop from './core/Shop'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/shop" component={Shop} exact/>
      </Switch>
    </HashRouter>
  )
}

export default Routes

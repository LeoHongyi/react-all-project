import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import AdminDashboard from './admin/AdminDashboard'
import AdminRoute from './admin/AdminRoute'
import Dashboard from './admin/Dashboard'
import PrivateRoute from './admin/PrivateRoute'
import Home from './core/Home'
import Shop from './core/Shop'
import Signin from './core/Signin'
import Signup from './core/Signup'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute path="/create/category" component={AddCategory} />
        <AdminRoute path="/create/product" component={AddProduct}/>
      </Switch>
    </HashRouter>
  )
}

export default Routes

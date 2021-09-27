import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import AdminDashboard from './admin/AdminDashboard'
import AdminRoute from './admin/AdminRoute'
import Dashboard from './admin/Dashboard'
import Orders from './admin/Orders'
import PrivateRoute from './admin/PrivateRoute'
import Cart from './core/Cart'
import Home from './core/Home'
import Product from './core/Product'
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
        <Route path="/cart" component={Cart} />
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute path="/create/category" component={AddCategory} />
        <AdminRoute path="/create/product" component={AddProduct} />
        <Route path="/product/:productId" component={Product} />
        <AdminRoute path="/admin/orders" component={Orders}/>
      </Switch>
    </HashRouter>
  )
}

export default Routes

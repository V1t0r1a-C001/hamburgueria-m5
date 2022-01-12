import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Order from '../pages/Order'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}></Route>
            <Route path='/order' component={Order}></Route>
        </Switch>
    )
}

export default Routes

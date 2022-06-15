import React from 'react'

import {Route, Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Transaction from '../pages/Transaction'

const Routes = () => {
  return(
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/customers' component={Customers} />
      <Route path='/transaction' component={Transaction} />
    </Switch>
  )
}


export default Routes
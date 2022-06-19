import React from 'react'

import { Route, Switch} from 'react-router-dom'
import Customers from '../pages/Customers'
import Transaction from '../pages/Transaction'
import Details from '../pages/Details'
import Material from '../pages/Material'
import EditUser from '../pages/EditUser'

const Routes = () => {
  return(

      <Switch>
        <Route path='/customers' component={Customers} />
        <Route path='/customer/:id' component={EditUser} />
        <Route path='/materials' component={Material} />
        <Route path='/transaction' component={Transaction} />
      </Switch>
  )
}


export default Routes
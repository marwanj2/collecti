import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profil from '../../pages/Profil'
import Compte from '../../pages/Compte'

const AppRoutes = () => {
  return (
    <Switch>
        <Route path='/profile' component={Profil} />
        <Route path='/Compte' component={Compte} />
    </Switch>
  )
}

export default AppRoutes
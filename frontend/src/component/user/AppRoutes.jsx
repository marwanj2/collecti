import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profil from '../../pages/Profil'

const AppRoutes = () => {
  return (
    <Switch>
        <Route path='/profile' component={Profil} />
    </Switch>
  )
}

export default AppRoutes
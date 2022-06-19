import React from 'react'
import './layout.css'
import Topnav from '../../topnav/TopNav'
import UserSidebar from '../UserSidebar'
import AppRoutes from '../AppRoutes'

import { BrowserRouter, Route } from 'react-router-dom'

const LayoutUser = () => {
  return (
    <BrowserRouter>
        <Route render={(props) => (
            <div className='layout'>
                <UserSidebar {...props}/>
                <div className="layout__content">
                    <Topnav/>
                    <div className="layout__content-main">
                        <AppRoutes/>
                    </div>
                </div>
            </div>
        )}/>
    </BrowserRouter>
)
}

export default LayoutUser
import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/tuat.png'

//import ThemeMenu from '../thememenu/ThemeMenu'

const curr_user = {
    display_name: 'Tuat Tran',
    image: user_image
}

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)


const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='chercher ici...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                   {/*<Dropdown
                        icon='bx bx-bell'
                        badge='0'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item,index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <i className='bx bx-palette'></i>
                </div>
            </div>
        </div>
    )
}

export default Topnav

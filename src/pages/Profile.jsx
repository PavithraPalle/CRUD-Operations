import React from 'react'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <a href="/profile/myaccount">My Accounts</a><br/>
        <br/>
        <a href="/profile/mysettings">My settings</a>

        <Outlet/>
    </div>
  )
}

export default Profile
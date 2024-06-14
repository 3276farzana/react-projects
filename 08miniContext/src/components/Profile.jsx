import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
function Profile() {
    const {user}=useContext(UserContext);
    if(!user) return <p>Please Login</p>
  return (
    <div>
      <h2>Welcome {user.username} to Your Profile</h2>
    </div>
  )
}

export default Profile

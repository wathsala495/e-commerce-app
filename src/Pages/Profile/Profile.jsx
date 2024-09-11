import React from 'react'
import logout from '../../Utils/auth/logout'

const Profile = () => {
  return (
    <div className="pt-[200px]">
      User
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Profile

import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { removeUser } from '../../store/ReduxSlice/userSlice'
import logout from '../../Utils/auth/logout'

const Admin = () => {
 const dispatch=useDispatch()
 const navigate=useNavigate()
 

  return (
    <div>
 <p>Admin</p>
 <br />
 <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Admin

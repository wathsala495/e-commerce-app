import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userSeletor } from '../store/ReduxSlice/userSlice';

const UserProtected = () => {
  const userData=useSelector(userSeletor)
  console.log(userData)
    // const user=false;
  return  userData.name ? <Outlet/> :<Navigate to="/login"/>
}

export default UserProtected

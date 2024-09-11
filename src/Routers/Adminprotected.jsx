import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {  Outlet, useNavigate } from 'react-router-dom';
import { userSeletor } from '../store/ReduxSlice/userSlice';
import NoUrl from '../404/NoUrl';

const Adminprotected = () => {
const userData=useSelector(userSeletor)


const[canView,setCanView]=useState(false)

 const user=useSelector(userSeletor)
 console.log("user role:"+user.role)

 useEffect(()=>{
  if(userData.name){
    console.log("name"+userData.name)
    if(!(userData.name=='default')){
      if(!(userData.role==='admin')){
      setCanView(true)
      }
    }
   }
  
 },[userData])

 return canView?<Outlet/>:<NoUrl/>

 
}

export default Adminprotected
//6:57
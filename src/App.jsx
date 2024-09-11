import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import AppRouter from "./Routers/AppRouter";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import getDataFromDocument from "./Utils/dataFetch/getDataFromDocument";
import { adduser, removeUser, userSeletor } from "./store/ReduxSlice/userSlice";

export default function App() {

  // const []=useState()
  const userData=useSelector(userSeletor)

  console.log("user Data:"+userData)

   const dispatch=useDispatch()
  useEffect(() => {
     const userCheck=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        getDataFromDocument('users',uid,(dataSet)=>{
          dispatch(adduser(dataSet))
        })
        console.log(uid)
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no user")
        dispatch(removeUser())
      }
    });

    return userCheck
    
  },[])
  return (
    <AppRouter/>
  )
}
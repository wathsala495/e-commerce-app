// import { collection, getDocs, query, where } from 'firebase/firestore'
// import React, { useEffect, useRef } from 'react'
// import { useDispatch } from 'react-redux'
// import db, { auth } from '../../Firebase/firebase'
// import { adduser } from '../../store/ReduxSlice/userSlice'
// import { Navigate, useNavigate } from 'react-router-dom'
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// const Login = () => {
//  const dispatch=useDispatch()
//  const userameRef=useRef()
//  const passwordRef=useRef()

//  const navigate=useNavigate()

//  useEffect(()=>{
//   const userCheck=()=>{
//     onAuthStateChanged(auth, (user) => {

      
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         console.log(user)
//         // ...
//       } else {
//         // User is signed out
//         // ..
//         console.log("user check running",user)
//       }
//     });
//   }
//   //  userCheck()

//   return()=>userCheck()
  
  
//   // const authCheck=()=>{
//   //   onAuthStateChanged(auth, (user) => {
   
//   //     if (user) {
//   //       // User is signed in, see docs for a list of available properties
//   //       // https://firebase.google.com/docs/reference/js/auth.user
//   //       const uid = user
//   //       console.log(uid)
//   //       // ...
//   //     } else {
//   //       // User is signed out
//   //       // ...
//   //     }
//   //   });  
//   // }
  
//   // authCheck()
//   // return()=>[
//   //   authCheck()
//   // ]

//  },[])
  
 
//  const loginSubmit=()=>{
//   const q = query(collection(db, "users"), where("username", "==", "admin"));

//   // getDocs(q).then((querySnapshot) => {
//   //       querySnapshot.forEach((doc) => {
//   //           // doc.data() is never undefined for query doc snapshots
//   //           console.log(doc.id, " => ", doc.data());
//   //           dispatch(adduser(doc.data()))
//   //       });
//   //       navigate('/admin')
//   //   })
//   //   .catch((error) => {
//   //       console.log("Error getting documents: ", error);
//   //   });

//   const email=userameRef.current.value;
//   const password=passwordRef.current.value;

 
// const user = auth.currentUser;


//   signInWithEmailAndPassword(auth, email, password)

//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//    console.log(user)
//   })
//   .catch((error) => {
   
//     const errorMessage = error.message;
//   });
   
//   }
//   return (
//     <div>
//      <input type="email" placeholder='email' ref={userameRef}/>
//      <input type="password" placeholder='password' ref={passwordRef}/>
//      <button onClick={loginSubmit}>Login</button>
//      <button onClick={()=>{
//       signOut(auth).then(() => {
//         // Sign-out successful.
//         alert("user sign out")
//       }).catch((error) => {
//         // An error happened.
//         alert(error.message)
//       });
      
//      }}>LogOut</button>
//     </div>
//   )
// }

// export default Login

import React, { useEffect, useState } from 'react'
import userRegister from '../../Utils/auth/register'
import { getAuth, signOut } from 'firebase/auth'
import userLogin from '../../Utils/auth/login'
import { useNavigate } from 'react-router-dom'
import emailValidate from '../../Utils/validate/emailValidate'
import passwordvalidate, { confirmPasswordValidate } from '../../Utils/validate/passwordValidate'
import { genderData } from '../../Utils/data'
import userDataValidate from '../../Utils/validate/userDataValidate'



const Login = () => {
  const [select,setSelect]=useState('login')
  return (
    <div className='w-full  flex flex-col items-center justify-center h-screen'>
     {select==='login'?(<LoginComponent/>):select==='register'?(<RegisterComonent/>) :null}
    <div className='mt-7'>
    {select==='login'?(
      <p >
        Don't have an account 
        <span onClick={()=>setSelect('register')} className='cursor-pointer'>SignUp</span></p>)
        :select==='register'?(
        <p>Already have an account{" "}
        <span onClick={()=>setSelect('login')} className='cursor-pointer'>Sign In</span></p>)
        :null}
        </div>
     
    </div>
  )
}

export default Login





const LoginComponent=()=>{
 const navigate=useNavigate()

 const [canSubmit,setCanSubmit]=useState(true)
 const [firebaseError,setfirebaseError]=useState("")




  const loginHandle=(e)=>{
   e.preventDefault()
   const email=e.target["email"].value
   const password=e.target["password"].value

   if(canSubmit && email.length >0 && password.length>0){
    userLogin(email,password,navigate,setfirebaseError)
   }
   else{
    console.log("can Submit",canSubmit)
   }
   const name=e.target[0].value

   console.log(name)

   console.log(email,password)
  
  }
  return(
    <div className='w-[90%]  p-5 shadow-lg flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-7'>Login</h1>
      <form action="" onSubmit={loginHandle} className='w-full flex-col flex items-center'>

      <LoginInputBox  inputType="email" plaeholder="Enter Your Email" label="Email" name="email"  errorMsgBase="email " setCanSubmit={setCanSubmit} firebaseError={firebaseError} setfirebaseError={setfirebaseError}/> 
      <LoginInputBox inputType="password" plaeholder="Enter Your Password" label="Password" name="password" errorMsgBase="password " setCanSubmit={setCanSubmit} firebaseError={firebaseError} setfirebaseError={setfirebaseError}/> 
      
    
    <button type='submit' className='mt-4 font-bold px-5 py-1 border-[2px] border-[black] rounded hover:shadow-lg hover:bg-slate-100'>Login</button>
    <div>
      <p>{firebaseError}</p>
    </div>
      </form>
      {/* <button onClick={()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }}>LogOut</button> */}
    </div>
  )
}

const firebaseError="" 

const setfirebaseError=(setter=()=>{})=>{}


const RegisterComonent=()=>{

  const [canSubmit,setCanSubmit]=useState(true)
  const [section,setSection]=useState(1)


  const registerHandle=(e)=>{
   e.preventDefault()
  //  const name=`${e.target[0].value}  ${e.target[1].value}`
  const firstname=e.target["firstname"].value
  const lasttname=e.target["lasttname"].value
  const gender=e.target["gender"].value
  const address=e.target["address"].value
  const email=e.target["email"].value
  const phone=e.target["phone"].value
  const password=e.target["password"].value
  const cpassword=e.target["cpassword"].value

  const name=`${firstname} ${lasttname}`
  //  const email=e.target[2].value
  //  const address =e.target[3].value
  //  const password=e.target[4].value
  //  const cPassword=e.target[5].value
  //  const phoneNumber=e.target[6].value
  //  const profileImage=e.target[7].value
   
  if(canSubmit && firstname && lasttname && gender && address && email && phone && password && cpassword){
    userRegister(email,password,name,gender,phone,address)
  }else{
    console.log("can not submit")
  }
  //  if(password===cPassword){
  //   userRegister(email,password,name,address,phoneNumber,profileImage)
  //  }
  //  console.log(e.target[0].value)
  }
  return(
    <div className='w-[90%]  p-5 shadow-lg flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-7'>Register</h1>
      <form action="" onSubmit={registerHandle} className='w-full flex-col flex items-center'>
     <div className={`w-full ${section===2 && "hidden"}` }>
             
        <LoginInputBox  inputType="text" 
      placeholder="Your First Name" 
      label="First Name" 
      name="firstname"  
      errorMsgBase="firstname " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}/> 

      <LoginInputBox  inputType="text" 
      placeholder="Your Last Name" 
      label="Last Name" 
      name="lasttname"  
      errorMsgBase="lastname " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}/> 

     

      <LoginInputBox  inputType="text" 
      placeholder="Gender" 
      label="Gender" 
      name="gender"  
      errorMsgBase="gender " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}
      selectorData={ genderData}/> 

      <LoginInputBox  inputType="text" 
      placeholder="Your Address" 
      label="Address" 
      name="address"  
      errorMsgBase="address " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}

      /> 

        </div>

        <div className={`w-full ${section===1 && "hidden"}` }>

          <LoginInputBox  inputType="email" 
      placeholder="Your Email Address" 
      label="Email" 
      name="email"  
      errorMsgBase="email " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}/> 

          <LoginInputBox  inputType="text" 
      placeholder="Your Phone Number" 
      label="Phone Number" 
      name="phone"  
      errorMsgBase="phone " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}/> 

<LoginInputBox  inputType="password" 
      placeholder="Your Password" 
      label="Password" 
      name="password"  
      errorMsgBase="password " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}/> 

      
      <LoginInputBox  inputType="password" 
      placeholder="Confirm Password" 
      label="Confirm Password" 
      name="cpassword"  
      errorMsgBase="cpassword " 
      setCanSubmit={setCanSubmit} 
      firebaseError={firebaseError} 
      setfirebaseError={setfirebaseError}/> 

          </div>

     <div className={`w-full flex ${section===1? 'justify-end':'justify-between'} px-7`}>
     {section===2 && <>
      <button type='submit' className='mt-4 font-bold px-5 py-1 border-[2px] border-[black] rounded hover:shadow-lg hover:bg-slate-100' onClick={()=>setSection(1)}>Back</button>
      <button type='submit' className='mt-4 font-bold px-5 py-1 border-[2px] border-[black] rounded hover:shadow-lg hover:bg-slate-100'>Register</button>
     </>}
     {section===1 && <button type='submit' className='mt-4 font-bold px-5 py-1 border-[2px] border-[black] rounded hover:shadow-lg hover:bg-slate-100' onClick={()=>setSection(2)}>Next</button>}
    
     </div>

      


    

      
       </form>
    </div>
  )
}
const LoginInputBox=({inputType,placeholder,label,name,errorMsgBase,setCanSubmit,firebaseError ,setfirebaseError,selectorData})=>{

  
 const [error,setError]=useState(false)
 const [errMsg,setErrmsg]=useState([])

//  useEffect(()=>{
//    if(error){
//     setCanSubmit(!error)
//    }
//  },[error])
  return(
    <>
    <div className={`relative w-[95%] border ${error?"border-red-600":"border-gray-400"}  rounded-[5px] p-3 m-3`}>
   <label className={`absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm ${error && "text-red-600"}`}>{label}</label>
   {selectorData ? <select name={name} defaultValue={selectorData.defaultValue} className='outline-none w-full'>
    {
      selectorData.data.map(({value,title,},index)=>{
       return(
        <option value={value} key={index}>{title}</option>
       )
       
      })
    }
   
   </select>: 
      <input onBlur={(e)=>
   
        errorMsgBase==='email'
        ?emailValidate(e.target.value,setErrmsg,setError) 
        :errorMsgBase==='password'
        ?passwordvalidate(e.target.value,setErrmsg,setError,setCanSubmit,errorMsgBase)
        :errorMsgBase==='cpassword'
        ?confirmPasswordValidate(e.target.value,setErrmsg,setError,setCanSubmit)
        :errorMsgBase==='address'
        ?userDataValidate(e.target.value,setErrmsg,setError,setCanSubmit,errorMsgBase)
        :errorMsgBase==='phone'
        ?userDataValidate(e.target.value,setErrmsg,setError,setCanSubmit,errorMsgBase)
        :userDataValidate(e.target.value,setErrmsg,setError,setCanSubmit,label)
        
        }  
        
        className={`outline-none w-full ${error && "placeholder:text-red-500 text-red-500"} `} 
        type={inputType}  placeholder={placeholder} name={name}
        onChange={()=>{
         if(firebaseError!==false){
           setfirebaseError(false)
         }
         if(error){
           setError(false)
           setCanSubmit(true)
           setErrmsg([])
         }
        }}
         />
   }
   
  
</div>
 {error && 
 ( errorMsgBase ==="password" ? (
  errMsg.map((err,index)=>(
    <p key={index} className='text-red-500 font-bold w-[90%] text-left ml-3 text-sm'> {err}</p>
  ))
 ):(
  <p className='text-red-500 font-bold w-[90%] text-left ml-3 text-sm'> {errMsg?.join(",")}</p>
 ))
}
</>

  )


}
//10:20

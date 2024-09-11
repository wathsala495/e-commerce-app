import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase/firebase"
import setDataDocument from "../dataFetch/setDataDocument";

const userRegister=(email,password,name,address,phoneNumber,profileImage)=>{

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    const userDataSet={
      name,
      address,
      email,
      phoneNumber,
      profileImage,
      uid:user.uid,
      role:'user'
    }
    setDataDocument('users',user.uid,userDataSet)
    // ...
  })
  .catch((error) => {

    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

}
export default userRegister;
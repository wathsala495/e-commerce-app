import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const userLogin=(email,password,naviagate,fError)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // ...
    naviagate('/')
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    if(errorMessage==='Firebase: Error (auth/invalid-credential).'){
      console.log("user not found")
       fError("User Not Found")
      // fError((pre)=>{
      //   const temp={...pre,email:'user not found'}
      // })
    }
    
  });
}





export default userLogin;

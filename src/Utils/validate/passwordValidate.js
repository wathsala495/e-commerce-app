import { capitalChar, numberChar, simpleChar, symbolChar } from "./validateChar"

const passCharValidateFunction=(password=[],checkCharSet=[])=>{
  let state= false
      password.forEach(passChar=>checkCharSet.forEach(checkChar=>{
         if(passChar===checkChar){
            if(!state){
               state=true
               console.log(passChar,checkChar,state)
            }
       
         }
      }))
      return state
}



const passwordvalidate=(data,errormsg,error,submit)=>{
   console.log("pwvalidate")
   const password=String(data).split("")
   
   console.log(password)

   if(password.length>8){
      const tempErrorMsg=[]
      const simpleCharState=passCharValidateFunction(password,simpleChar);
      const capitalCharState=passCharValidateFunction(password,capitalChar);
      const numberCharState=passCharValidateFunction(password,numberChar);

      const symbolCharState=passCharValidateFunction(password,symbolChar);


      

      console.log(simpleCharState,capitalCharState,numberCharState,symbolCharState)
      if(!simpleCharState) {
         tempErrorMsg.push("password must contain at least one simple character")
      } 
       if(!capitalCharState) {
         tempErrorMsg.push("password must contain at least one capital character")
      } 
      if(!numberCharState){
         tempErrorMsg.push("password must contain at least one number")
      }
      if(!symbolCharState){
         tempErrorMsg.push("password must contain at least one symbol")
      }
      if(tempErrorMsg.length>0){
         error(true)
         submit(false)
         errormsg(tempErrorMsg)
         
      }
     
      console.log(tempErrorMsg)
       
   }else{
      error(true)
      submit(false)
      errormsg(['password must be at least 8 characters long'])
   }
}
export default passwordvalidate
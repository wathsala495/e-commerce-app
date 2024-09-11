import { emailDomain, numberChar, simpleChar } from "./validateChar";

 //This function validates an email address
 const emailValidate =(data,errorMsg,error,submit)=>{
    
      //Split the email address into username and domain
      const  dataForCheck = String(data).split('@');
      //Check if the email address has a username and domain
      if(dataForCheck.length === 2){
        //Create an array to store error messages
        const tempErrorMsg=[]

        //Create an array to store the validity of each character in the username
        let unValidChar=[];
        //Create a variable to store the final validity result
        let finalValidResult=true

        //Create an array of valid characters
        const validChar = simpleChar.concat(numberChar)

        //Split the username into individual characters
        const username=dataForCheck[0].split("")
        //Loop through each character in the username
        username.forEach((char)=>{
             //Create a variable to store the validity of the character
             let valid=false;
             //Loop through each valid character
             validChar.forEach((vchar)=>{
                  //Check if the character is valid
                  if(char === vchar){
                    //Set the validity of the character to true
                    valid=true;
                  }
             })
             //Push the validity of the character to the array
             unValidChar.push(valid)
        })
        //Loop through each validity result
        unValidChar.forEach(ele=>{
            //Check if the character is not valid
            if(!ele){
                //Set the final validity result to false
                if(finalValidResult){
                    finalValidResult=false
                }
            }
      })
      //Check if the username is not valid
      if(!finalValidResult){
        //Push an error message to the array
        tempErrorMsg.push("username is not valid")
      }
        //Log the final validity result
        console.log(finalValidResult)
        //Create a variable to store the validity of the domain
        let emailDomainValid =false;
        //Loop through each valid domain
        emailDomain.forEach(domain=>{
          //Check if the domain is valid
          if(domain===dataForCheck[1]){
           //Set the validity of the domain to true
           if(!emailDomainValid) {
              emailDomainValid=true
           }  
          }
        })
        //Check if the domain is not valid
        if(!emailDomainValid){
          //Push an error message to the array
          tempErrorMsg.push("domain is not valid")
        }
        //Log the final validity result
        console.log(finalValidResult)
        //Call the errorMsg function with the array of error messages
        if(tempErrorMsg.length>0){
            error(true)
            submit(false)
        }
        errorMsg(tempErrorMsg)
      }
      
      //Check if the email address does not have a username and domain
      else{
        error(true)
        submit(false)
        //Call the errorMsg function with an error message
        errorMsg(["Not a valid Email"])
      }
      //Log the split email address
      console.log(dataForCheck)

 }
 //Export the emailValidate function
 export default emailValidate;
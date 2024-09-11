import { capitalChar, numberChar, simpleChar } from "./validateChar";

const userDataValidate=(data,errorMsg,error,submit,type)=>{
     const userData=String(data).split(',');
     const tempErrorMsg=[]

     //Create an array to store the validity of each character in the username
     let userDataValidChar=[];
     //Create a variable to store the final validity result
     let finalValidResult=true

     //Create an array of valid characters
     let validChar = simpleChar.concat(capitalChar)

     if(type==="address"){
        validChar=validChar.concat([...numberChar,'.','.','-','(',')'])
     }
     console.log('valid char',validChar)

     //Split the username into individual characters
    //  const username=dataForCheck[0].split("")
     //Loop through each character in the username
     userData.forEach((char)=>{
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
          userDataValidChar.push(valid)
     })
     //Loop through each validity result
     userDataValidChar.forEach(ele=>{
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
     tempErrorMsg.push(`${type} is not valid`)

   }
// errorMsg(tempErrorMsg){
//     if(errorMsg.length>0){
//         error(true)
//         submit(false)
//         errorMsg(tempErrorMsg)
//     }
// }
}

export default userDataValidate
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

const dbData={}
const getDataFromCollection=(collectionName,setFunction)=>{
    
 

   
    if(dbData[collectionName] && dbData[collectionName].length>0){
        setFunction(dbData[collectionName])
    }
    else{
        getDocs(collection(db,collectionName)).then((querySnapshot) => {

            console.log('data read from db')
            const dataArr=[]
            querySnapshot.forEach((doc) => {
                dataArr.push({...doc.data(),categoryId:doc.id})
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
            });
            // console.log(dataArr)
            dbData[collectionName]=dataArr
            setFunction(dataArr)
            console.log(dataArr)
        });
    }
   
}

export default getDataFromCollection
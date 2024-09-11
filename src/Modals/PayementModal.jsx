import { Modal } from '@mui/material';
import React,{forwardRef, useImperativeHandle, useState} from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from '../Firebase/firebase';
import { doc, setDoc } from "firebase/firestore"; 

const PayementModal = (props,ref) => {
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    useImperativeHandle(ref,()=>({
      handleOpen:() => setOpen(true),
    }))

    const addData=()=>{
      setDoc(doc(db, "category/category4/category4", "category4_item1"), {
        title: "Category4 title 1",
        img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        rating:2.3
        
      })
      .then((docRef) => {
        console.log("Document written with ID: ");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
    }
  return (
    <Modal
        open={open}
        onClose={handleClose}
        className='flex flex-col items-center justify-center'
      >
        <div className='w-[90%] bg-white'>  
            Amila
            <button onClick={addData}>click</button>
        </div>
       
      </Modal>
  )
}

export default forwardRef(PayementModal)
//1:42

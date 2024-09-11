import { IconButton } from '@mui/material'
import React, { useRef } from 'react'

const itemImageArr=[
  'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
  'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
  'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
  'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQMwq_mZ2I9qpXPhmIeJ5on2jZTavrF65Kw&s',
]

const ItemPage = () => {
  
  const mainImageRef =useRef()
  const subImageRef=useRef([])

  return (
    <div className="py-[100px] px-5 w-full h-screen overflow-y-scroll">
    
    <h1 className='text-lg  font-bold  text-black px-3 mb-7'>Item Title</h1>
    <img ref={mainImageRef} src={itemImageArr[0]} alt="main item" className='w-full object-contain rounded-md'/>
    <div className='w-full mt-5 grid grid-cols-4 text-center grid-rows-1 gap-3 '>
{itemImageArr.map((ele,index)=>{
  return(
    <IconButton  key={index} sx={{
      padding:'0',
      borderRadius:'2px'
    }} onClick={()=>{
      subImageRef.current[index].style.border='2px solid gold';
      mainImageRef.current.src=subImageRef.current[index].src;
      for (let i=0;i<itemImageArr.length;i++){
        if (i!==index){
          subImageRef.current[i].style.border='none'
        }
      }
    }}>
       <img 
        ref={(refEle)=>(subImageRef.current[index]=refEle)}
        name={`item image ref:${index}`}
        src={ele}
        alt={ele}
        className='w-full object-contain rounded-sm'/>
    </IconButton>
   
  )
})}
    </div>
    </div>
  )
}

export default ItemPage

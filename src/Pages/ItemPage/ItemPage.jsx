import { IconButton } from '@mui/material'
import React, { useRef } from 'react'
import Rating from '@mui/material/Rating';

const itemImageArr=[
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
    {/* product details */}
    <div className='w-full h-[1px] mt-7 mb-3 bg-slate-400'>
        <div>
          <h3 className='text-3xl font-bold '><span className='text-red-700 font-normal'>-40%</span>Rs.2,500.00/-</h3>
          <p className='font-semibold text-gray-700'>List Price:Rs. 5,000.00</p>
          <p className='text-green-700 font-semibold text-base'>In Stock</p>
          <Rating 
     
     value={3.5}
     precision={0.1}
     size='small'
     readOnly/>
     <p className='font-semibold text-gray-900 text-xs'>AUK Product</p>
     <div className='w-full h-[1px] bg-slate-400 mt-3 mb-3'>
      <p>Condition: <span className='font-semibold'>Brand New</span></p>
      <div className='flex items-center gap-2'>
        <p>Quantity:</p>
        <input className='py-2 px-3 w-[70px]  border-black outline-none rounded-lg border-2 font-semibold' type="text" />
      </div>
     </div>
        </div>

    </div>
    </div>
  )
}

export default ItemPage

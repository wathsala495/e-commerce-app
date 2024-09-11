import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { categorySelector } from '../../store/ReduxSlice/categorySlice'
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import {  ListItemButton } from '@mui/material';
import getDataFromSubCollection from '../../Utils/dataFetch/getDataFromSubCollection';
import Loading from '../../Components/Loading/Loading';

const CategoryItems = () => {
//redux toolkit we can use to  pass data frompage to another page category.jsx => categoryItems.jsx
    const category=useSelector(categorySelector)
    const {catedoryId}=useParams()
    console.log("id="+catedoryId)
    const [catagoryTitle]=category.filter((ele)=>ele.id===catedoryId)
    
     console.log("title:"+catagoryTitle)
    console.log(category)

    const [categoryitemsData,setcategoryitemsData]=useState([])
   
    useEffect(()=>{
      getDataFromSubCollection('category',catedoryId,catedoryId,setcategoryitemsData)
    },[])

    if(categoryitemsData.length===0){
      return<Loading/>
    }

    console.log('category data',categoryitemsData)
    
  return (
    <div className="py-[100px] sm:px-12 md:px-[120px] px-5 w-full h-screen overflow-y-scroll">
     <h1 className='ml-3 font-bold text-lg mt-2 mb-3 md:text-2xl '> {catagoryTitle.title}</h1>
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 grid-rows[auto] gap-4'>
    {categoryitemsData.map(({img,title},index)=>{
        return(
<CategoryItemUnit imageUrl={img} title={title} key={index}/>
        )
    })}
    </div>
    </div>
  )
}

export default CategoryItems

const CategoryItemUnit=({imageUrl,title})=>{
    return(
       
          <ListItemButton sx={{padding:"0",margin:"0",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    <div style={{display:"inline-block!important"}} className='w-full '>
        <img src={imageUrl} alt={title} className='w-full object-contain'/>
        <div className='w-full mx-1 flex flex-col mb-2 md:mx-2'>
        <h3 className=' ml-2 mr-1 inline-block text-left text-sm font-bold text-black'>{title}</h3>
        <Rating 
     name={imageUrl}
     value={3.5}
     precision={0.1}
     size='small'
     readOnly/>
        </div>
        

    </div>
    </ListItemButton>
    
    )
}

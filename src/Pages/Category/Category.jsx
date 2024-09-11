import {  ListItemButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import getDataFromCollection from '../../Utils/dataFetch/getDataFromCollection'
import Loading from '../../Components/Loading/Loading'




export default function Category() {

  const [categoryData,setCategoryData]=useState([])

  // const payementModalRef=useRef()
  

  useEffect(()=>{
    getDataFromCollection("category",setCategoryData)
    console.log("category component data:",categoryData)
  },[])
  if(categoryData.length===0){
    return<Loading/>
  }

  return (
    <div className="py-[100px] px-5 sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
    <div  style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className='w-full p-2'>
    <h1 className='text-lg font-bold mb-3 mt-2 ml-2'>Main Category</h1>
      <section className=' grid grid-cols-3 md:grid-cols-4 grid-rows-[auto] gap-5'>
      {categoryData?.map(({img,title,categoryId},index)=>{
        return(
      <CategoryUnitItems imgUrl={img} title={title} key={index} categoryId={categoryId}/>
        )
      })}
      </section>
  
    </div>
    </div>
  )
}

const CategoryUnitItems=({imgUrl,title,categoryId})=>
   <Link   to={`/cateogry/${categoryId}`}>
   {/* <Link   to='{/category/{catedoryId}}'> */}
 
    <ListItemButton sx={{padding:"0",margin:0 ,boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"6px"}}>
    <div className='w-full m-1 rounded-md  overflow-hidden flex flex-col items-center py-6 px-3'>
  <img src={imgUrl} alt={title} 
  className='rounded-full w-[50px] h-[50px]' />
  <h2 className='text-[10px] text-black font-bold mt-3 sm:text-sm'>{title}</h2>


  </div>
    </ListItemButton>
  
  
  </Link>

  //3:19


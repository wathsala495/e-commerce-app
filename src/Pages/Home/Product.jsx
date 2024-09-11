import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination ,Navigation,Mousewheel} from 'swiper/modules';
import { IconButton } from '@mui/material';
import './styles.css'
import Rating from '@mui/material/Rating';

const productArr=[
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 1 product title 1product title 1 product title 1 product title 1'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 2'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 3'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 4'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 5'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 6'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 7'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 8'
           
    },
    {
        imageUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
        ,price:'100',
        productTitle:'product title 9'
           
    }
]

const Product = ({title,rowsCount,slidesPerView}) => {
  return (
    <section style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className='w-full mt-6  p-2'>
      <h1 className='text-lg font-bold mb-3 mt-2 ml-2'>{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={5}
        navigation={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Grid, Pagination,Mousewheel]}
      
      >{
        productArr.map(({imageUrl,price,productTitle,id},index)=>
            <SwiperSlide key={index}>
      
              <ProductUnit 
              imageUrl={imageUrl} 
              price={price} 
              productTitle={productTitle} 
              id={index}
              />   
            </SwiperSlide>
        )
      }
        
        
      </Swiper>
    </section>
  )
}

export default Product


const ProductUnit=({imageUrl,price,productTitle,id})=>{
    return(
        <IconButton sx={{
            padding:"4px",
            borderRadius:'5px',
            marginBottom:"30px"
        }}>
<div className='w-full  relative pb-4  mb-5 ' >
    

    <img src={imageUrl} alt={`product_unit_${id}`} className='w-full object-contain'/>
    <div className='px-1 text-left sm-px-2'>
    <h3 className='text-xs sm:text-sm md:text-lg  text-justify font-semibold text-stone-900'>{String(productTitle).substring(0,49)}{String(productTitle).length > 49?"...":null}</h3>
    <Rating 
     name={imageUrl}
     value={3.5}
     precision={0.1}
     size='small'
     readOnly/>
    <h3 className='text-stone-900 font-bold text-lg'>Rs.{price}</h3>
    </div>
 <div className='absolute top-0 left-0 w-full h-full bg-slate-400 opacity-0 hover:bg-[red]'>  </div>
    
</div>
</IconButton>
    )
}

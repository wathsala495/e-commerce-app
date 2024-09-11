import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const adsElement=[
    {
        imgUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
    },
    {
        imgUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
    },
    {
        imgUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
    },
    {
        imgUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
    },
    {
        imgUrl:"https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
    },
]

const Ads = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className='rounded-lg overflow-hidden'
       
      >
        {/* <SwiperSlide>
      
    </SwiperSlide>
        <SwiperSlide>
        <AdUnit imgUrl={adsElement[1].imgUrl}  id={1}/>
      
    </SwiperSlide>
        <SwiperSlide>
        <AdUnit imgUrl={adsElement[2].imgUrl}  id={1}/>
      
    </SwiperSlide> */}
       {adsElement.map((slide, index) => (
        <SwiperSlide key={index}>
         <AdUnit imgUrl={slide.imgUrl} id={index}/>
        </SwiperSlide>))}


        
      </Swiper>
  )
}

export default Ads

const AdUnit=({imgUrl,id})=>
    
            <img src={imgUrl} alt={`ad${id}`} 
            className='w-full object-contain rounded-lg'/>
   

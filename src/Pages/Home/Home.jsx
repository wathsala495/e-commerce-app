import React, { useRef, useState } from 'react'
import Ads from './Ads'
import Product from './Product'
import Loading from '../../Components/Loading/Loading'
import PayementModal from '../../Modals/PayementModal'
import MainContainer from '../../Layout/MainContainer'

const Home = () => {

  const [loading,setLoading]=useState(false)
  // const payementModalRef=useRef()
  if(loading){
    return<Loading/>
  }
  return (
    <MainContainer>
      {/* <PayementModal ref={payementModalRef}/> */}
      
    <Ads/>
    <Product title="Trending Products"rowsCount={1}  slidesPerView={3}/>
    <Product title="Electronic Product"rowsCount={1}  slidesPerView={3}/>
    <Product title="LapTop Items"rowsCount={1}  slidesPerView={3}/>
    </MainContainer>
  )
}

export default Home

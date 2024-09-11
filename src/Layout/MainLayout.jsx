import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useRef } from 'react'
import PayementModal from '../Modals/PayementModal'

const MainLayout = () => {

  const payementModalRefs=useRef()
  return (
    <div className='overflow-hidden w-screen h-screen'>
      <PayementModal ref={payementModalRefs}/>
       <Header payementModalRef={payementModalRefs}/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default MainLayout

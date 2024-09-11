import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const NoUrl = () => {
  // const parms=useParams()
  // console.log(parms['*'])

  const {pathname}=useLocation()
  console.log(pathname)
  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center`}>
      <h1 className='text-6xl font-bold'>404</h1>
      <p>The requested URL {pathname} was not found on this server</p>

    </div>
  )
}

export default NoUrl

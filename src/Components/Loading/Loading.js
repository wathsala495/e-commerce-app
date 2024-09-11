import React from 'react'
import style from './loading.module.css'

const Loading = () => {
  return (
    <div className='relative top-0 left-0 w-screen h-screen flex 
    justify-center items-center bg-white z-[101] flex-col gap-3' >
       
      <div className={style.loading_dots}></div>
loading

    </div>
  )
}

export default Loading

import React, { useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from '@mui/material';

let cliked=false
const Header = ({payementModalRef}) => {
 
  
  const logoRef=useRef()
  const searchBoxRef=useRef()
  const searchBoxContainerRef =useRef()

  const searchButtonClickHandle=()=>{
    if(cliked){
      logoRef.current.style="display:none"
      searchBoxRef.current.style="display:inline-block"
      searchBoxContainerRef.current.style.backgroundColor="#fdf3f3"
    }
    else{
      logoRef.current.style="display:inline-block"
      searchBoxRef.current.style="display:none"
      searchBoxContainerRef.current.style.backgroundColor="inherit"
    }
  }

  

  return (
    <header className='fixed top-0 left-0 z-[100] w-full p-2  bg-my-background flex items-center 
    justify-between drop-shadow-header-shadow'>
     {/* header left */}
     <div className=' flex items-center '>
      <IconButton sx={{color:"red"}}>
      <MenuIcon sx={{color:"#c82196"}}/>
      </IconButton>
       
        <h1 ref={logoRef} className='text-sm font-bold ml-2' style={{display:window.innerWidth<640?
          cliked?"none":"inline-block":"inline-block"}}>AUK <span className='text-[#c82196]'>DEV</span></h1>
        <div ref={searchBoxContainerRef} className='style={{backgroundColor:
          window.innerWidth<640?
           cliked?"#fdf3f3":"inherit":"#fdf3f3"}} flex items-center rounded-full bg-[#fdf3f3] ml-2 overflow-hidden'>
            <input ref={searchBoxRef} type="text" placeholder='Search' 
            style={{display:window.innerWidth<640
            ?cliked
               ?"inline-block"
               :"none":"inline-block",transition:"all 400ms ease-in-out"}} className='hidden sm:inline-block outline-none p-2 font-semibold text-sm w-[200px] bg-inherit ml-1'/>
            <IconButton onClick={()=>{
              if(window.innerWidth<640){

                searchButtonClickHandle()
                cliked=!cliked;
               
              }
            }
            }>
            <SearchIcon sx={{display:window.innerWidth<640?cliked?"rgb(156 163 175)":"black":"rgb(156 163 175)"}} 
          />
            </IconButton>
            

        </div>
     </div >
     {/* header right */}
     <IconButton onClick={()=>{
      payementModalRef.current.handleOpen()
     }}>
      <div className='relative rounded-full p-1'>
      <ShoppingCartOutlinedIcon className='text-black' />
      <div className='absolute top-2 w-3 h-3 flex justify-center items-center right-0 text-[7px] bg-black rounded-full text-white  font-semibold'>2</div>
      </div>
     
     </IconButton>
     
    </header>
  )
}

export default Header
//2:27

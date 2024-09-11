import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Footer = () => {
   
  const [whoIsClick,setWhoIsClick]=useState({
    Home:true,
    Cateogry:false,
    Profile:false
  })
  
  return (
    <footer className='fixed bottom-0 left-0 z-[100] w-full px-3 pb-1
     bg-my-background flex items-center 
    justify-between drop-shadow-header-shadow md:gap-5'>
      
      <FooterIcon Icon={HomeOutlinedIcon} Icontext={"Home"} clickFun={{whoIsClick,setWhoIsClick}}/>
     
     <FooterIcon Icon={AppsOutlinedIcon} Icontext="Cateogry" clickFun={{whoIsClick,setWhoIsClick}} />
     
      {/* <Link to='/'  onClick={()=>setWhoIsClick({Home:true,Cateogry:false,Profile:false,})}>
      <FooterIcon Icon={HomeOutlinedIcon} Icontext={"Home"} clickFun={{whoIsClick,setWhoIsClick}}/></Link> */}
      
    
      {/* <Link to='/category' onClick={()=>setWhoIsClick({Home:false,Cateogry:true,Profile:false,})}>
      <FooterIcon Icon={AppsOutlinedIcon} Icontext="Cateogry" clickFun={{whoIsClick,setWhoIsClick}} /></Link> */}
      <div className='md:flex-1 md:text-right'>
      
      <FooterIcon Icon={AccountCircleOutlinedIcon} Icontext={"Profile"} clickFun={{whoIsClick,setWhoIsClick}} />
      </div>
    </footer>
  )
}

export default Footer

const FooterIcon=({Icon,Icontext,clickFun})=>{
 
  // let divstyle;
  // if(Icontext==='Home' & clickFun.whoIsClick.Home===true){
  //   divstyle={borderBottom:"2px solid red"}

  // }
  // else if(Icontext==='Cateogry' & clickFun.whoIsClick.Cateogry===true ){
  //   divstyle={borderBottom:"2px solid red"}

  // }
  // else if(Icontext==='Profile' & clickFun.whoIsClick.Profile===true ){
  //   divstyle={borderBottom:"2px solid red"}

  // }
  const clickHandle=()=>{
    const obj={
      Home:true,
      Cateogry:false,
      Profile:false
    }
    if(Icontext==="Cateogry"){
      obj.Cateogry=true;
      obj.Home=false;
      obj.Profile=false;
    
     
    
    }
    else if(Icontext==="Profile"){
      obj.Profile=true;
      obj.Cateogry=false;
      obj.Home=false;
 
    }
    clickFun.setWhoIsClick(obj)
  }
  return(
    <Link to={Icontext==="Home"?'/':`/${String(Icontext).toLowerCase()}`}>
  <IconButton sx={{padding:"4px",paddingTop:"0px",borderRadius:"5px", color:"red"}} onClick={clickHandle}>
    {/* <div 
    style={divstyle} className='text-gray-700 hover:text-[#c82196] transition-all duration-300 '> */}
    <div 
    style={{borderTop:clickFun.whoIsClick[Icontext] 
    && "2px solid red"}} className='text-gray-700 hover:text-[#c82196] transition-all duration-300 ' >
    <Icon/>
      <p className='text-xs font-semibold'>{Icontext}</p>
    </div>
  </IconButton>
  </Link>)
  
}



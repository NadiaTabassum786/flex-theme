import React from 'react'
// import App from '../app'
import { Link } from 'react-scroll'
export default function nabvar() {
  return (
    <>
    <div className='flex sticky top-0 bg-white nav w-[100%] justify-between px-[30px] items-center py-[20px]'>
      <h1 className='md:pl-[33px] pl-[0px] text-2xl font-black cursor-pointer '>Uniel</h1>
    <ul className='invisible md:visible flex w-[58%] font-semibold text-[15px] cursor-pointer justify-evenly'>
       <Link to='home'spy={true} smooth={true} offset={50} duration={1000} activeClass="active">
       <li  className='hover:text-[rgb(219,65,82)]'>Home</li> 
       </Link>
       <Link to='project' spy={true} smooth={true} offset={50} duration={1000} activeClass="active">
        <li className='hover:text-[rgb(219,65,82)]'>Projects</li> </Link>
        <Link to='service' spy={true} smooth={true} offset={50} duration={1000} activeClass="active">
        <li className='hover:text-[rgb(219,65,82)]'>Services</li> </Link> 
       <Link to='about'spy={true} smooth={true} offset={50} duration={1000} activeClass="active">
        <li className='hover:text-[rgb(219,65,82)]'>About</li></Link>
        <Link to='team'spy={true} smooth={true} offset={50} duration={1000} activeClass="active">
        <li className='hover:text-[rgb(219,65,82)]'>Team</li></Link>
        <Link to='client'spy={true} smooth={true} offset={50} duration={1000} activeClass="active">
        <li className='hover:text-[rgb(219,65,82)]'>Clients</li></Link>
        <Link to='contact'spy={true} smooth={true} offset={50} duration={1000} activeClass="active">
        <li className='hover:text-[rgb(219,65,82)]'>Contact</li></Link>

       
     </ul>
      
    </div>
    
    
    </>
  )
}

import React from 'react'
import Img1 from '../components/images/girl.jpg'
import Img2 from '../components/images/boy.jpg'
import Img3 from '../components/images/men.jpg'
import Img4 from '../components/images/source.jpg'
import Card from './card'
// import {FaFacebookF} from 'react-icons/fa' 


export default function team() {
  return (
     <>
     <div id='team' className='bg-[rgb(219,65,64)] w-[100%] text-white lg:h-[110vh]  h-[200vh]'>
        <h1  className='md:pt-[120px] pt-[60px] md:text-5xl text-[40px] md:ml-[70px] ml-[30px]'>Our Team
        {/* <FaFacebookF/>  */}
        </h1>
        <div className='flex md:ml-[35px] flex-wrap w-[96%]'>
              <Card  data={{src:Img2}}/>
              <Card  data={{src:Img1}}/>
              <Card  data={{src:Img4}}/>
              <Card  data={{src:Img3}}/>
               <div className='flex pl-[20px] justify-evenly flex-col border-[2px] h-[53vh]  md:mt-[70px] mt-[30px] md:w-[16.5%] w-[35%] ml-[20px]  md:ml-[30px]'>
               <h1 className='text-2xl'>Join Us</h1>
               <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit, sed do <br /> eiusmod tempor <br /> incididunt ipsum dolor.</p>
               <div className='bg-white h-[3px] w-[20px] '></div>
               <button className='w-[100px] hover:translate-x-5 duration-100'>CONTACT →</button>
              </div>



        </div>
       


     </div>
     </>
  )
}

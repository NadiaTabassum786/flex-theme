import React from 'react'
import Img4 from '../components/images/presentation.svg'
import Img5 from '../components/images/arrow.svg'
import Img6 from '../components/images/rocket.svg'
import Img8 from '../components/images/responsive.svg'
import Img9 from '../components/images/whiteboard.svg'
import Servise from './service_card' 
export default function servises() {
  return (
     <>
     <h1 className='text-gray-700 text-[14.5px] md:mt-[120px] mt-[60px] ml-[40px] md:ml-[70px]'>FULL SERVICE STUDIO</h1>
     <h1 className='text-5xl mb-[30px] text-gray-700 text-extrabold mt-[40px] ml-[40px] md:ml-[70px]'>Services</h1>
  
   <div id='service' className='flex border md:pl-[35px] flex-wrap '>
<Servise data={{src:Img4, head:"MARKETING"}}/>
<Servise data={{src:Img5, head:"BRANDING", back:"rgb(219,65,64)", line:"white", color:"white"}}/>

<Servise data={{src:Img6, head:"MOTION"}}/>

<Servise data={{src:Img8, head:"UI DESIGN"}}/>

<Servise data={{src:Img9, head:"UX DESIGN"}}/>
   </div>
     </>
  )
}

import React from 'react'
import Second_card from './second_card'
import Img1 from '../components/images/logo-1.svg'
import Img2 from '../components/images/logo-2.svg'
import Img3 from '../components/images/logo-3.svg'
import Img4 from '../components/images/logo-4.svg'
import Img5 from '../components/images/logo-5.svg'
import Img6 from '../components/images/logo-6.svg'

export default function client() {
  return (
    <> 
    <div id='client' className='bg-white md:ml-[50px] ml-[20px] lg:h-[90vh] lg:mt-[60px] w-[97%] md:w-[95%] flex flex-wrap pt-[30px]'>
        <div className='lg:w-[21%] w-[96%] md:w-[40%] mt-[20px] md:ml-[20px] h-[180px] md:h-[260px] lg:h-[230px] flex flex-col justify-between'>
             <h1>SELECTED</h1>
             <h1 className='md:text-5xl text-4xl text-gray-700'>Clients</h1>
             <div className='h-[3px] w-[25px] bg-[rgb(219,65,64)] '></div>
             <button className=' mt-[20px] text-[15px] w-[100px] text-[rgb(219,65,64)]'> CONTACT →  </button>
        </div>
   <Second_card data={{src:Img1,color:"rgb(219,65,64)",back:"white", text:"white"}}/>
   <Second_card data={{src:Img2}}/>
   <Second_card data={{src:Img3}}/>
   <Second_card data={{src:Img4}}/>
   <Second_card data={{src:Img5}}/>
   <Second_card data={{src:Img6}}/>



    </div>
    </>
  )
}

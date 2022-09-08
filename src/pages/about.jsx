import React from 'react'
import Img3 from '../components/images/house.jpg'
// import Card from './card'
export default function about() {
  return (
    <>
    <div id='about' className='bg-[rgb(219,65,64)] md:h-[117vh] h-[190vh] flex md:flex-row flex-col w-[100%] text-white mt-[100px]'>
    
                <div className='flex flex-col  md:w-[50%] w-[95%]'>
                    <h2 className='text-[14px] mb-[40px] md:mt-[100px] mt-[50px] md:ml-[70px] ml-[30px]'>THE STORY SO FAR</h2>
                    <h1 className='md:ml-[70px] ml-[30px] md:text-[50px] text-[40px] md:mb-[30px] mb-[10px]'>About Us</h1>
                    <p className='md:ml-[70px] ml-[30px] md:w-[78%] mb-[20px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  <p className='md:ml-[70px] ml-[30px] md:w-[78%] mb-[20px]'>Duis aute irure dolor in quis nostrud exercitation ullamco laboris nisi ut   aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                  <p className='md:ml-[70px] ml-[30px]  md:w-[78%] md:mb-[60px] mb-[20px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <div className='w-[23px] md:ml-[70px] ml-[30px] bg-white h-[3px]'></div>
                    <button className='md:ml-[60px] ml-[20px] mt-[20px] text-[15px] w-[100px] hover:translate-x-5 duration-500'> CONTACT → </button>
                </div>
                <img className='md:w-[43%] w-[94%] md:h-[73%]  ml-[20px] md:mt-[100px] mt-[30px] ' src={Img3} alt="" />
            
    </div>
    <div className='h-[100vh] w-full'>
      
       <div className='flex flex-wrap '>
       <div className='flex flex-col lg:h-[70vh] h-[40vh] lg:mt-[150px] mt-[65px] w-[80%] lg:w-[20%] lg:ml-[80px] ml-[20px]'>
     <h1 className='text-gray-800 lg:text-5xl text-4xl'> Key Facts </h1>
        <h1 className='lg:text-[200px] text-[90px] text-[rgb(219,65,64)]'> 75</h1>
        <div className='bg-gray-700 h-[3px] w-[20px] '></div>
        <p className='mt-[20px] text-gray-700'> SUCCESSFUL PROJECTS </p>
     </div>
     <div className='flex flex-col h-[30vh]  lg:h-[70vh] lg:mt-[150px] lg:w-[20%] lg:ml-[130px] ml-[20px]'>
     <h1 className='text-gray-800 lg:mt-[120px] text-xl '> Designed For Growth</h1>
        <h1 className='lg:text-[110px] text-[60px] text-gray-700'> 24 </h1>
        <div className='bg-gray-700 h-[3px] w-[20px] lg:mt-[32px] mt-[20px]'></div>
        <p className='mt-[20px] text-gray-700'> EMPLOYEES </p>
     </div>
     <div className='flex  flex-col h-[30vh] lg:h-[70vh] lg:mt-[150px] lg:ml-[10px] lg:w-[15%]'>
        <h1 className='lg:text-[110px] text-gray-700 -ml-[4px] lg:mt-[180px] mt-[50px] text-6xl'> 16 </h1>
        <div className='bg-gray-700 h-[3px] w-[20px]  lg:mt-[55px] mt-[28px]'></div>
        <p className='mt-[20px] text-gray-700'>  YEARS  </p>
     </div>
     <div className='flex flex-col  lg:h-[70vh] ml-[100px] lg:ml-0 lg:mt-[150px] lg:w-[20%] '>
        <h1 className='lg:text-[110px] text-7xl text-gray-700 mt-[50px] lg:mt-[180px]'> 3 </h1>
        <div className='bg-gray-700 h-[3px] w-[20px]  lg:mt-[53px]  mt-[15px]'></div>
        <p className=' mt-[20px] text-gray-700'> LOCATIONS </p>
     </div>
      
       </div>
    </div>
    </>
  )
}

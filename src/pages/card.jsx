import React from 'react'

export default function card(props) {
  return (
     <>
     <div className='flex flex-col border-[2px] md:h-[53vh] h-auto md:mt-[70px] mt-[30px] w-[35%] md:w-[16.5%] ml-[20px] md:ml-[30px]'>
     <img src={props.data.src} className=' h-[57%] w-[100%]' alt="" />
     <h1 className='text-xl mt-[25px] ml-[15px] mb-[10px] font-black'>Alex Tomson</h1>
     <h1 className='ml-[15px] mb-[10px]'>Art Director</h1>
     <div className='flex justify-evenly cursor-pointer '>
     <i class="fab fa-facebook-f hover:text-gray-400"></i>
     <i class="fab fa-twitter hover:text-gray-400"></i>
     <i class="fab fa-dribbble hover:text-gray-400"></i>
     <i class="fab fa-pinterest hover:text-gray-400"></i>
     <i class="fab fa-google-plus-g hover:text-gray-400"></i>
       
     </div>
     </div>
     </>
  )
}

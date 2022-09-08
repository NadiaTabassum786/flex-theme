import React from 'react'

export default function second_card(props) {
  return (
    <>
    <div style={{background:props.data.color}} className='mt-[20px] w-[96%] md:w-[40%] md:h-[260px] lg:w-[21%] lg:h-[230px] md:ml-[20px] bg-gray-100 flex flex-col justify-between items-center pb-[20px]'>
        <img style={{background:props.data.back1}} className='w-[80%] mt-[30px] h-[60%]' src={props.data.src} alt="" />
        <div style={{background:props.data.back}} className='h-[3px] w-[25px] bg-black '></div>
         <h1 style={{color:props.data.text}}>DEFAULT</h1>
    </div>
    </>
  )
}

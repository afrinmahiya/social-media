import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const Photo = () => {
  return (
    <div className='w-[283px] h-[416px] bg-white  pt-[19px] pr-[29px] pl-[29px] pb-[29px] ml-[33px] rounded-3xl   '>
     
      <div className='flex justify-between '>
        <div className='font-bold text-[12px] '>Photos <span className='text-[#23D2E2] '> 37</span> </div>
        <div className=''><BsThreeDots />
</div>
      </div>

       <div className='flex  justify-between pb-[15px] pt-[17px] '>
        <div className='w-[105px] h-[100px] bg-[#615DFA] rounded-2xl  '>  </div>
        <div className='w-[105px] h-[100px] bg-[#24234B] rounded-2xl'></div>
      </div>

       <div className='flex justify-between pb-[15px]'>
        <div className='w-[105px] h-[100px] bg-[#615DFA] rounded-2xl'></div>
        <div className='w-[105px] h-[100px] bg-[#24234B] rounded-2xl'></div>
      </div>

       <div className='flex justify-between pb-[15px]'>
        <div className='w-[105px] h-[100px] bg-[#615DFA] rounded-2xl'></div>
        <div className='w-[105px] h-[100px] bg-[#41EFFF] rounded-2xl text-white text-center  '>
          <p className='pt-[41px] font-bold text-[12px] '>32+</p></div>
      </div>
      
      
     
    </div>
  )
}

export default Photo

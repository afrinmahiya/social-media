import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const Video = () => {
  return (
    <div className=' w-[283px] h-[416px]  bg-white  pt-[19px] pr-[29px] pl-[29px] pb-[19px] ml-[33px] mt-[12px] rounded-3xl '>

           <div className='flex justify-between mb-[19px] '>
                <div className='font-bold text-[12px] '>Videos  <span className='text-[#23D2E2] '> 7</span> </div>
                <div className=''><BsThreeDots />
        </div>
              </div>

              <div className='w-[225px] h-[100px] rounded-2xl bg-[#615DFA] flex justify-center items-center mb-[19px] '>
                <img src="/public/images/play.png" alt="" />
              </div>

               <div className='w-[225px] h-[100px] rounded-2xl bg-[#24234B] flex justify-center items-center mb-[19px]'>
                <img src="/public/images/play.png" alt="" />
              </div>

               <div className='w-[225px] h-[100px] rounded-2xl bg-[#615DFA] flex justify-center items-center mb-[19px] '>
                <img src="/public/images/play.png" alt="" />
              </div>
      
    </div>
  )
}

export default Video

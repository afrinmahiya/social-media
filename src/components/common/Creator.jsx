import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const Creator = () => {
    return (
        <div className='flex'>
            <div className='w-[50px] h-[50px] bg-[#615DFA] rounded-[50%] border-[#D9D9D9] border-2 '> </div>
            <div className="flex ml-[6px] w-[459px] justify-between">
                <div className=''>
                <p className='font-bold text-[14px]'>MAHIYA AFRIN</p>
                <p className='text-[#AFB0C0] font-normal text-[12px] '>29 minutes ago</p>
            </div>
            <div><BsThreeDots /></div>
            </div>
            
        </div>
    )
}

export default Creator

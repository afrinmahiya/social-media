import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const About = () => {
    return (
        <div className='w-[283px] pt-[19px] pr-[26px]  pl-[27px] pb-[29px] rounded-3xl bg-white mr-[15px] mb-[12px] ml-[33px]  font-Poppins'>

            <div className='flex justify-between mb-[29px] '>
                <p className=' font-bold text-[14px] text-black '>About Me</p>
              <div className='pl-[26px]'>  <BsThreeDots /></div>

            </div>
            <p className='font-normal text-[12px] text-[#AFB0C0] mb-[18px] '>Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
            <div className='font-bold text-[12px] text-[#AFB0C0] h-[18px] w-[183px] flex justify-between mb-[18px]'> 
                <p >  Joined:  </p>
                <p className='font-normal' >  22 November 2008</p>
                
            </div>

            <div className=' font-bold text-[12px] text-[#AFB0C0] h-[18px] w-[93px] flex justify-between mb-[18px]'> 
                <p>  City:  </p>
                <p className='font-normal'> Dhaka </p>
                
            </div>

            <div className=' font-bold text-[12px] text-[#AFB0C0] h-[18px] w-[101px] flex justify-between'> 
                <p>  Age:  </p>
                <p className='font-normal'>  18 years </p>
                
            </div>

        </div>
    )
}

export default About

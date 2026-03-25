import React from 'react'
import { FaBars } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { BiLogoMessenger } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";




const Navbar = () => {
  return (
    <nav className='bg-[#615DFA] flex items-center max-[1628px] font-Poppins pt-4 pb-3.5'>
      <div className='pl-6 flex gap-3 ' >
        <img src="/images/logo.png" alt="Logo" />

      </div>

      <ul className='flex gap-12 items-center  text-white  ml-[73px] mr-[73px]'>
        <li ><FaBars /></li>
        <li className='text-[14px]'>Careers</li>
        <li className=' text-[14px]'>Store</li>
        <li className='text-[14px] '>FAQ</li>
        <li className='text-[20px] '><BsThreeDots /></li>
      </ul>

      <div className='max-w-103.75 rounded-[11px] bg-[#4E4AC8] relative py-4.5 px-4 mr-[70px]'>
        <input className="text-[#6965E0]" placeholder='Search here ....' type='text' />
        <div className='absolute text-[#6763DF] top-[30%] right-[26px] w-3.5  h-3.5'>

          <IoSearch /> </div>
      </div>


      <div className='mr-[40px]'>
        <div className=' max-w-27.75 flex gap-11.5 font-Poppins font-normal text-xs text-white mb-0.75 '>
          <p> Next</p>
          <p>35 EPX</p>
        </div>
        <div className=' bg-[#4E4AC8] h-0.75 max-w-27.75 '><div className='max-w-[83px] bg-[#41EFFF] h-0.75 '>
        </div></div>
      </div>

      <div>
        <ul className='flex '>
          <li className=' w-8 h-px rotate-90 bg-[#7A77FD] mt-2.75'></li>

          <li className='w-4.5 h-4.5 text-[#7A77FD]'><FaCartArrowDown />
          </li>
          <li className='w-4.5 h-4.5 text-[#7A77FD]'><BiLogoMessenger />
          </li>
          <li className='w-4.5 h-4.5 text-[#7A77FD]'><FaBell />
          </li>
          <li className='w-8 h-px  bg-[#7A77FD] rotate-90 mt-2.75'></li>
          <li className='w-4.5 h-4.5 text-[#7A77FD]'><IoSettings />

          </li>

        </ul>
      </div>

    </nav>
  )
}

export default Navbar
import { FaNewspaper } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineMonochromePhotos } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="max-w-[300px] bg-white ">
      <div className=" relative  "> <img src="/public/images/cover-pic.png" alt="" /></div>
      <div className=" mt-[15px] absolute top-20 left-22.5 border-4 rounded-[50%] border-white "> <img src="/public/images/porfile-pic.png" alt="" /></div>

      <div className="username font-Poppins mt-[75px] px-[68px] text-center ">
        <h1 className="font-bold text-[16px] text-black  "> MAHIYA AFRIN</h1>
        <p className="font-medium  text-[12px] text-[#AFB0C0] ">www.maahiya.com</p>
      </div>

      <div className="mt-[42px] flex  ">
        <div className="pl-[35px] pr-[24px] ">
          <h4 className=" font-bold text-[14px] text-black  ">930</h4>
          <p className="font-bold text-[12px] text-[#AFB0C0]">Friends</p>
        </div>

        <div className=' w-[1px] h-[25px] font-bold bg-[#AFB0C0] mt-2.75'></div>

        <div className="pl-[24px] pr-[24px]">
          <h4 className=" font-bold text-[14px] text-black  ">87</h4>
          <p className="font-bold text-[12px] text-[#AFB0C0]">Posts</p>
        </div>

        <div className=' w-[1px] h-[25px] font-bold bg-[#AFB0C0] mt-2.75'></div>

        <div className="pl-[24px] pr-[34px]">
          <h4 className=" font-bold text-[14px] text-black  ">1k</h4>
          <p className="font-bold text-[12px] text-[#AFB0C0]">Followers</p>
        </div>
      </div>


      <div className="mt-[64px] text-[#AFB0C0] font-semibold text-[14px] mr-[8px] ml-[24px]  ">

        <ul>
          <li className="w-[268px] h-[50px] flex gap-[29px] "> <div className="pt-[5px]"> <FaNewspaper /></div> Newsfeed </li>
          <li className="w-[268px] h-[50px] flex gap-[29px]"><div className="pt-[5px]"> <FaFileVideo /> </div>Videos </li>
          <li className="w-[268px] h-[50px] flex gap-[29px]"><div className="pt-[5px]"> <FaLayerGroup /></div> Groups </li>
          <li className="w-[268px] h-[50px] flex gap-[29px]"><div className="pt-[5px]"> <MdOutlineMonochromePhotos /></div> Photos </li>
          <li className=" w-[268px] h-[50px] flex gap-[29px]"> <div className="pt-[5px]"><FaUserFriends /></div>  Friends </li>
          <li className="w-[268px] h-[50px] flex gap-[29px]"><div className="pt-[5px]"><FaHandsAslInterpreting /></div>   Friends Request </li>
          <li className=" flex gap-[29px]"><div className="pt-[5px]"><MdLogout /></div>  Logout </li>
        </ul>


      </div>


    </div>
  )
}

export default Sidebar

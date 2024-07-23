import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Tooltip } from "react-tooltip";
const Header = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center px-4">

      <div className="w-1/4 flex items-center gap-3">
        <span className="text-3xl">
          <IoIosMenu />
        </span>
        <div>
          <img
            width={100}
            src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
            alt="YouTube"
          />
        </div>
      </div>

      <div className="w-1/2 flex items-center gap-3">
        <div className="flex items-center gap-3 w-full border border-md border-gray-600 py-1 px-4 rounded-full">
          <input className="w-full font-normal text-xl outline-none border-none border border-r-2 border-gray-500 " type="text" placeholder="Search" />
          <span className="text-2xl cursor-pointer" data-tooltip-id="search">
          <CiSearch  />
          <Tooltip id="search" content='Search' />
          </span>
        </div>
        <div data-tooltip-id="voice" className="text-3xl h-10 w-14 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
          <MdKeyboardVoice />
          <Tooltip id="voice" content='Search with your voice' />
        </div> 
      </div>

      <div className=" w-1/4 flex items-center justify-end gap-3">
        <span data-tooltip-id="upload" className="text-3xl h-10 w-10 cursor-pointer flex items-baseline pt-1 justify-center rounded-full hover:bg-gray-200">
          <AiOutlineVideoCameraAdd />
          <Tooltip id="upload" content='Create' />
        </span>
        <span data-tooltip-id="notification" className="text-3xl h-10 w-10 cursor-pointer flex items-baseline pt-1 justify-center rounded-full hover:bg-gray-200">
        <IoMdNotificationsOutline />
        <Tooltip id="notification" content='Notification' />
        </span >
        <button data-tooltip-id="profile" className="text-xl font-bold h-10 w-10 flex items-baseline pt-1 justify-center rounded-full bg-gray-700 text-white">R</button>
        <Tooltip id="profile" content='Profile' />
      </div>
    </div>
  );
};

export default Header;

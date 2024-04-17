import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='nab_bar'>
      <button className='nav_icon nav_active'>
          <FaWallet />
      </button>
      <button className='nav_icon'>
          <FaRegCompass />
      </button>
      <button className='nav_icon'>
          <IoMdNotifications />
      </button>
      <button className='nav_icon'>
          <IoMdSettings />
      </button>
    </div>
  )
}

export default Navbar
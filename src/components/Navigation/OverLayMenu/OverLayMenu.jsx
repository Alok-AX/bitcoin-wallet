import React from 'react'
import { CgEditFlipH } from "react-icons/cg";
import { CgBox } from "react-icons/cg";
import { RiShare2Line } from "react-icons/ri";
import { IoRemoveCircleOutline } from "react-icons/io5";
const OverLayMenu = () => {
  return (
    <div className="button_hover_section_open overlay">
        <a href='#' className='link'>
            Edit <CgEditFlipH />
        </a>
        <a href='#' className='link'>
            courier Info <CgBox />
        </a>
        <a href='#' className='link'>
            Share<RiShare2Line />
        </a>
        <a href='#' className='link'>
            Remove <IoRemoveCircleOutline />
        </a>
    </div>
  )
}

export default OverLayMenu
import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";

import OverLayMenu from './OverLayMenu/OverLayMenu';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
          setIsOpen(false);}};
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleMenuClick = () => {
      setIsOpen(!isOpen);
    };


  return (
    <div className='navigation_wrapper'>
        <button className='backbtn'>
            <MdOutlineArrowBackIos />
        </button>
        <h4>Bitcoin Wallet</h4>
        <button className='navigation_menu' onClick={handleMenuClick} ref={buttonRef}>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </button>
        {isOpen && (
           <OverLayMenu/>
           )}
    </div>
  )
}

export default Navigation
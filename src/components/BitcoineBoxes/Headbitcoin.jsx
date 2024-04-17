import React from 'react'
import { BsCurrencyBitcoin } from "react-icons/bs";

const Headbitcoin = () => {
  return (
    <div className='bitcoin_box_head'>
        <BsCurrencyBitcoin  className='bitcoin_icon'/>
        <p>Bitcoin</p>
        <span>BTC</span>
    </div>
  )
}

export default Headbitcoin
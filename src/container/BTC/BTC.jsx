import React from 'react'
import SellBTC from '../../components/SellBTC/SellBTC'
import BuyBTC from '../../components/BuyBTC/BuyBTC'

const BTC = () => {
  return (
    <div className='two_btc_row'>
        <BuyBTC/>
        <SellBTC/>
    </div>
  )
}

export default BTC
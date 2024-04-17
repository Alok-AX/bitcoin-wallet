import React from 'react'
import Headbitcoin from '../../components/BitcoineBoxes/Headbitcoin'
import BitcoinPrice from '../../components/BitcoineBoxes/BitcoinPrice'
import BitcoinSubText from '../../components/BitcoineBoxes/BitcoinSubText'
import BitcoinDownArrow from '../../components/BitcoineBoxes/BitcoinDownArrow'

const BitcoineBox = () => {
  return (
    <div className='bitcoine_box'>
        <Headbitcoin/>
        <BitcoinPrice/>
        <BitcoinSubText/>
        <BitcoinDownArrow/>
    </div>
  )
}

export default BitcoineBox
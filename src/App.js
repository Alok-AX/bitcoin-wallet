import React from 'react'
import Navbar from './components/Navbar/Navbar'
import BTC from './container/BTC/BTC'
import Tabformat from './components/TabFormat/Tabformat'
import BitcoineBox from './container/BitcoineBox/BitcoineBox'
import Navigation from './components/Navigation/Navigation'

const Hero = () => {
  return (
    
  <>
  <div className='webview'><h1>Only for Mobile - Please view on your mobile device.</h1></div>
    <div className='mobile_app'>
      <Navigation/>
      <BitcoineBox/>
      <Tabformat/>
      <BTC/>
      <Navbar/>
    </div>
  </>
  )
}

export default Hero
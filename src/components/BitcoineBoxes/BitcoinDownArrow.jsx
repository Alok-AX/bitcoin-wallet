
import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";

const BitcoinDownArrow = () => {
  const [showBuySellBtn, setShowBuySellBtn] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false);

  const toggleBuySellBtn = () => {
    setShowBuySellBtn(!showBuySellBtn);
    setArrowClicked(!arrowClicked);
  };

  return (
    <>
      <div className={`bitcoin_down_arrow ${arrowClicked ? 'btnclicked' : ''}`} onClick={toggleBuySellBtn}>
        <button>
          <MdOutlineArrowBackIos className='bitcoin_down_arrow_icon' />
        </button>
      </div>
      <div className={`buy_sell_btn ${showBuySellBtn ? 'show' : ''}`}>
        <button className='buy'>Buy</button>
        <button className='sell'>Sell</button>
      </div>
    </>
  );
};

export default BitcoinDownArrow;



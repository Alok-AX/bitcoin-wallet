import React from 'react'
import Graph from '../Graph/Graph';
import { GiPlainCircle } from "react-icons/gi";
import { FaRegDotCircle } from "react-icons/fa";
const TabInner = () => {
  return (
    <div>
        <ul>
            <li><p className='graph_wrap_linetext_lower'> <GiPlainCircle className='red_icon' />Lower:$4.895</p></li>
            <li><p className='graph_wrap_linetext_higher'> <GiPlainCircle className='green_icon' />Higher:$6.857</p></li>
        </ul>
        <Graph/>
        <p className='graph_wrap_linetext_inner'> <FaRegDotCircle className='orange_icon' />1 BTC = $5.483</p>
    </div>
  )
}

export default TabInner
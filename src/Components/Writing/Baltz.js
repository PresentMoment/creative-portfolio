import React, { useState, useEffect } from 'react'
import Pdf from '@mikecousins/react-pdf';

import baltz from '../../dapper.pdf'
import "../Styles/BaltzStyle.css";


export default function Baltz(props) {
  const [winSize, setWinSize] = useState("");

  useEffect(() => {
    window.innerWidth > 767 ? setWinSize("big") : setWinSize('smol')
  }, [])
  return (
    <div className={props.nav ? "baltzScreen" : "baltz"}>
      <div className="baltz-text">

      <div><p>The British style magazine Dapper Dan asked me to write about a subject which inspires me.  I chose photographer Lewis Baltz.</p>
      <p>Printed in Dapper Dan issue # 21, 2020</p></div>

  </div>
      <div className="pdf-container">
      <Pdf file={baltz} page={1} scale={winSize === 'smol' ? 0.5 : 1}/>
      </div>
      </div>
  )
}

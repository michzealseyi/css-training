import React from 'react'
import CSS from '../Logo/logo.svg'
import CSS2 from '../Logo/logo2.svg'
import Home from '../Logo/house-solid.svg'

function Logo() {
  return (
    <div>
        <img src={CSS} className="logo" alt=""/>
        <img src={CSS2} className="logo2" alt=""/>
        <img src={Home} className="logo3" alt=""/>
    </div>
  )
}

export default Logo
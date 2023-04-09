import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <p className='heading'>todos</p>
        <p>Items will persist in browser local storage</p>
    </div>
  )
}

export default Header
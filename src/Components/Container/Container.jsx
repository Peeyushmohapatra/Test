import React from 'react'
import "./container.css"
import Input from '../Input/Input'
import Todocontainer from '../ListContainer/Todocontainer'

const Container = () => {
  return (
    <div className='container'>
        <Input/>
        <Todocontainer/>
    </div>
  )
}

export default Container
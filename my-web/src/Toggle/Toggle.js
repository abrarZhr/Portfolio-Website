import React from 'react'
import './Toggle.css'
import {BiSun} from 'react-icons/bi'
import {BiMoon} from 'react-icons/bi'
import { themeContext } from '../context'
import { useContext } from 'react'

const Toggle = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const handlClick =() =>{
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className='toggle' onClick={handlClick}>
    <BiSun/>
    <BiMoon/>
    <div className='t-button'
    
    style={darkMode? {left:'2px'} : {right : '2px'}}
    >
    </div>

    </div>
  )
}

export default Toggle
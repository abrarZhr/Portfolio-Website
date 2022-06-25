import React from 'react'
import wave from '../images/wave.png';
import './Footer.css'
import {MdOutlineCopyright} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave}/>
        <div className='f-footer'>
            <span>Copyright Abrar <MdOutlineCopyright/></span>
        </div>
    </div>
  )
}

export default Footer
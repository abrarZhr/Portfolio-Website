import React from 'react'
import './Header.css'
import Toggle from '../Toggle/Toggle'

const Header = () => {
  return (
    
    <div className='NavBar'>
    <div className='left'>
    <did className="name">Abrar</did>
    <Toggle/>

    </div>
    <div className='right'>
    <div className='list'>
    <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Experience</li>
        <li>portfolio</li>
        <li>Testimonials</li>
    </ul>
        </div>
        <button className='button n-button'>
            Contact
        </button>
    </div>






    </div>
  )
}

export default Header
import React from 'react'
import './card.css'

const Card = ({emoje , heading , detail} ) => {
  return (
    <div className='card'>
        <img src={emoje}/>
        <span>{heading}</span>
        <span>{detail}</span>
    </div>
  )
}

export default Card
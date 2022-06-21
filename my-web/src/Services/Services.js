import React from 'react'
import './services.css'
import Card from '../Card/Card';
import heartemoji from '../images/heartemoji.png'
import glasses from '../images/glasses.png'
import humble from '../images/humble.png'


const services = () => {
  return (
    <div className='services'>
    <div className='s-left'>
        <span>My services</span>
        <span>a passionate software developer achieve success</span>
        
        <div className='blur' style={{background:"c1f5ff" , left:"1rem" }}></div>
        

  
        <div className='blur' style={{background:" rgb(244, 246, 178)" , top:"8rem" }}></div>
        </div>

        <div className='s-right'>
        <div  >
        
            <Card
            emoje={heartemoji}
            heading={'Des'}
            detail={"figma"}
            />
        </div>
        {/* 2 card */}
        <div>
            <Card
            emoje={glasses}
            heading={'Des'}
            detail={"figma"}
            />
            </div>

            {/* 3 card */}
            <div >
            <Card
            emoje={humble}
            heading={'Des'}
            detail={"figma"}
            />
            </div>



       

        </div>







    </div>

  )
}

export default services
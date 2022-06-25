import React , {useEffect} from 'react'
import './services.css'
import Card from '../Card/Card'
import heartemoji from '../images/heartemoji.png'
import glasses from '../images/glasses.png'
import humble from '../images/humble.png'
import "aos/dist/aos.css"



function services () {

  return (
    <div className='services' id='services'>
    <div className='s-left'>
        <span>Education & Work Experience </span>
        <span>Computer and Information sciences , Bachelor's Degree graduation in 2020 </span>
        
        <div className='blur' style={{background:"c1f5ff" , left:"1rem" }}></div>
        

  
        <div className='blur' style={{background:" rgb(244, 246, 178)" , top:"8rem" }}></div>
        </div>

        <div className='se-right'>
        <div>
        <div data-aos="fade-left"
         data-aos-easing="linear"
     data-aos-duration="1500">
        <Card  
            emoje={heartemoji}
            detail={"Bachelor's Degree at Imam Muhammad Bin Saud University"}
            />
            </div>
        </div>
        {/* 2 card */}
        <div data-aos="fade-up-right"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <Card
            emoje={glasses}
            heading={'Ministry of Health'}
            
            />
            </div>

            {/* 3 card */}
            <div data-aos="flip-left" 
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">
            <Card
             emoje={humble}
            heading={'Tuwaiq Academy Camp'}
            />
            </div>



       

        </div>







    </div>

  )
}

export default services
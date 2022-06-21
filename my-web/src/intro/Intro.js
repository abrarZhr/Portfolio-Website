import React from 'react'
import './Intro.css'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaRegHandPeace } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import abraralzhrani from './abraralzhrani.pdf'
import {motion} from 'framer-motion';
import glassesimoji from '../images/glassesimoji.png'

const transition ={duration :4 , type:'spring'}

function Intro() {
  return (
    <div className='intro'>
        <div className='left'>
        <div className='name'>
        <span>Hi i Am </span>
        <span>Abrar Alzhrani</span>
        <span>Full stack Devloper JS</span>

        <a href={abraralzhrani} download>
        <button  className='button s-button'>Download CV</button>
        </a>

        </div>



        
        <div className='icons'>
            <BsGithub/>
            <AiFillLinkedin/>
            <BsTwitter/>
        </div>

        </div>

        


        <div className='i-right'>
      
      
        <img src='https://github.com/ZainRk/portfolio-starter/blob/master/src/img/Vector2.png?raw=true'></img> 
        <img src='https://th.bing.com/th/id/R.fc00a2507683868c33bfe50f78216965?rik=wfMJ9w5nxTbfiw&riu=http%3a%2f%2f15865747.s61i.faiusr.com%2f4%2fAD0Ik6-IBxAEGAAgtMXM0gUohPbL_gMw2QE42QE.png&ehk=Zlt8fyAox5EWFDOHOgnmQC1BWPezjxnYSS9P8WW6%2bn0%3d&risl=&pid=ImgRaw&r=0'></img>
        <img src='https://img.freepik.com/free-vector/web-developer-sits-chair-programmer-flat-design-man-with-laptop-programming-languages-html-css-javascript_616756-496.jpg?w=740'></img>
        <div className='floatingDiv'>
        <span> <a><FaFileCode/></a> Web Devloper </span>
        <span><a> <FaRegHandPeace/></a> bast Devloper</span>
        <img
      
        src={glassesimoji}

        />
      </div>

      {/* blur divs */}
      <div className='blur' style={{background : "rgb(238 210 255"}}>
      </div>
      <div className='i-blur' style={{background : "#c1f5ff"}}>
      </div>

        
        </div>


    </div>
  )
}

export default Intro
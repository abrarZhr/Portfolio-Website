import React from 'react'
import './Intro.css'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaRegHandPeace } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import abraralzhrani from './abraralzhrani.pdf'
import glassesimoji from '../images/glassesimoji.png'
import "aos/dist/aos.css"
import {themeContext} from '../context'
import { useContext } from 'react';



function Intro() {

const transition ={duration :4 , type:'spring'}

  
const theme = useContext(themeContext)
const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
        <div className='left'>
        <div className='name'>
        <span  style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white' :'',
    }}
    >Hi i Am </span>
        <span>Abrar Alzhrani</span>
        <span>Full stack Devloper JS</span>

        <a href={abraralzhrani} download>
        <button  className='button s-button'>Download CV</button>
        </a>

        </div>



        
        <div className='icons'>
          <a href='https://github.com/abrarZhr'> <BsGithub/> </a> 
          <a href='https://linkedin.com/in/abrarsaeed'> <AiFillLinkedin/> </a> 
            <BsTwitter/>
        </div>

        </div>

        


        <div className='i-right'>
      
      
        <img src='https://github.com/ZainRk/portfolio-starter/blob/master/src/img/Vector2.png?raw=true'></img> 
        <img src='https://th.bing.com/th/id/R.fc00a2507683868c33bfe50f78216965?rik=wfMJ9w5nxTbfiw&riu=http%3a%2f%2f15865747.s61i.faiusr.com%2f4%2fAD0Ik6-IBxAEGAAgtMXM0gUohPbL_gMw2QE42QE.png&ehk=Zlt8fyAox5EWFDOHOgnmQC1BWPezjxnYSS9P8WW6%2bn0%3d&risl=&pid=ImgRaw&r=0'></img>
        <img src='https://img.freepik.com/free-vector/web-developer-sits-chair-programmer-flat-design-man-with-laptop-programming-languages-html-css-javascript_616756-496.jpg?w=740'></img>
        
        <div  className='floatingDiv'  >
       
        <span  data-aos="fade-up"
        data-aos-duration="3000"
        style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white' :'',
    }}> <a ><FaFileCode/></a>  Web Devloper </span>

        <span data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
        style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white' :'',
    }}
    >
        <a> <FaRegHandPeace/></a> Bast Devloper</span>
       
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
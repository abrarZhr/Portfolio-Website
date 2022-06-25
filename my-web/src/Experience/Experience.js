import React from 'react'
import './Experience.css'
import js from '../images/js.png';
import react from '../images/react.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import html from '../images/html.png';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll'

function Experience() {

  return (
    <div className='works' id='Experience'>
        <div className='e-left'>
            <span>Working on </span>
            <span>all these technicals</span>
            <span>I was one of the students of Tuwaiq Academy in full stack developer
            html , css , js , react <br/>
            and the back-end Express , Mongodb , node.js <br/>
           also Field Training 280 Hours in Ministry of Health
            on asp.net & sqlserver</span>
            
          
            
        </div>
        <div className='blur' style={{background:" rgb(244, 246, 178)" , top:"100rem" , left:"-10rem" }}></div>
        <div className='blur' style={{background:" pink" , top:"120rem" ,left:"-30vh" }}></div>

        <div className='e-right'>
        <motion.div 
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5 , type:'spring'}}
        className='e-mainCircle'
        >
        <div className='e-secCircle'><img src={express} height={"50px"} width={"100px"}/></div>
            <div className='e-secCircle'><img src={mongodb} height={"100px"} width={"200px"}/></div>
            <div className='e-secCircle'><img src={html} height={"100px"} width={"200px"}/></div>
            <div className='e-secCircle'><img src={react} height={"100px"} width={"100px"}/></div>
            <div className='e-secCircle'><img src={js} height={"100px"} width={"100px"}/></div>
            </motion.div>
            <div className='e-backCircle blue '></div>
            <div className='e-backCircle yellow'></div>

        </div>
           
        






    </div>
  )
}

export default Experience
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Portofolio from './component/Portofolio'
import Clients from './component/Clients';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import InViewWrapper from './component/InViewWrapper';

function App() {

  // const [post,setPost] = useState({x:0, y:0});
  // const [isHovered,setIsHovered] = useState(false)

  // const handleMouseMove = e => {
  //   if(!isHovered) return;

  //   const {left,top,width,height} = e.currentTarget.getBoundingClientRect();
  //   const x = ((e.clientX - left )/width)*100;
  //   const y = ((e.clientY - top )/width)*100;

  //   setPost({x,y})
  // }

  return (
    <>   
    <Header />
    <InViewWrapper><Hero /></InViewWrapper> 
    <InViewWrapper><About /></InViewWrapper>
    <InViewWrapper><Portofolio /></InViewWrapper>
    <InViewWrapper><Clients /></InViewWrapper>
    <InViewWrapper><Blog /></InViewWrapper>
    <InViewWrapper><Contact /></InViewWrapper>
    <InViewWrapper><Footer /></InViewWrapper>    
    </>
  )
  
}

export default App
import React, {useEffect,useRef} from 'react'
import { motion, useInView } from 'motion/react';

function Header() {

  useEffect(() => {
    if(!isInView) return
    //Hamburger
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
  
    const toggleHamburger = () => {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    }
  
    hamburger.addEventListener('click',toggleHamburger);
  
    //Navbar  
    const header = document.querySelector('header');
  
    const handleScroll = () => {
      if(window.pageYOffset > 0){
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };
  
    window.addEventListener('scroll',handleScroll);
    
    //Cleanup Function
    return () => {
      hamburger.removeEventListener('click',toggleHamburger);
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'
                   ref={ref}
                   initial={{opacity: 0}}
                   whileInView={{opacity: 1}}
                   transition={{duration: 0.8, ease: 'easeOut'}}
    >
      {isInView && (
        <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className='font-bold text-lg text-primary block py-6'>Rivensin</a>
          </div>
          <div className="flex items-center justify-center px-4">
            <button id='hamburger' name='hamburger' type='button' className='block absolute right-4 lg:hidden'>
              <span className='hamburger-line transition duration-300 ease-in-out origin-top-left'></span>
              <span className='hamburger-line transition duration-300 ease-in-out'></span>
              <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
            </button>
            <nav id='nav-menu' className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
              <ul className='block lg:flex'>
                <li className='group'>
                  <a href="#home" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary hover:underline duration-200'>Beranda</a>
                </li>
                <li className='group'>
                  <a href="#about" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary hover:underline duration-200'>Tentang Saya</a>
                </li>
                <li className='group'>
                  <a href="#portofolio" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary hover:underline duration-200'>Portofolio</a>
                </li>
                <li className='group'>
                  <a href="#clients" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary hover:underline duration-200'>Clients</a>
                </li>
                <li className='group'>
                  <a href="#blog" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary hover:underline duration-200'>Blog</a>
                </li>
                <li className='group'>
                  <a href="#contact" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary hover:underline duration-200'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </div>
      )}
    </motion.header>
  )
}

export default Header
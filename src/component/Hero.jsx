import React, {useRef} from 'react'

function Hero() {
  
  return (
    <section id='home' className='pt-28'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className='text-base font-semibold text-primary md:text-xl'>Halo Semua✌, saya 
              <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl '>Rivensin</span>
            </h1>
            <h2 className='text-secondary font-medium text-lg mb-5 lg:text-2xl'>
              Front End Developer
            </h2>
            <p className='font-medium text-secondary mb-10 leading-relaxed'>
              Selamat datang di latihan membuat portofolio saya dengan menggunakan Tailwind CSS
            </p>
            <a href="#" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out '>Hubungi saya</a>
          </div>
          <div className='w-full self-end p-4 lg:w-1/2'>
            <div className="mt-10 relative lg:mt-0 lg:right-0">
              <img src="img/1725381035677.png" alt="creator" className='max-w-full mx-auto'/>
              <span className='absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
              <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#14b8a6" d="M54.2,-22.6C58.7,-3.6,43.1,17.1,21.5,33.7C0,50.3,-27.4,62.9,-44.5,52.6C-61.5,42.2,-68.2,8.9,-59.1,-16.4C-49.9,-41.7,-25,-59,-0.1,-59C24.8,-59,49.6,-41.6,54.2,-22.6Z" transform="translate(100 100)"/>
              </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
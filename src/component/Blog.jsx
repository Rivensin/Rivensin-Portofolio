import React from 'react'

function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2'>
              Blog
            </h4>
            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Tulisan Terkini
            </h2>
            <p className='font-medium text-md text-secondary md:text-lg'>
              Temukan berbagai artikel terbaru seputar programming dan teknologi. 🚀
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img src="img/blog/programming-languages.jpg" alt="programming" className='w-full h-60'/>
                <div className="py-8 px-8">
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate '>Tips Belajar Programming</a>
                  </h3>
                  <p className='font-medium text-secondary text-base mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident!
                  </p>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img src="img/blog/figma.jpg" alt="figma" className='w-full h-60'/>
                <div className="py-8 px-8">
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate '>Design Menggunakan Figma</a>
                  </h3>
                  <p className='font-medium text-secondary text-base mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate odit velit quos.
                  </p>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img src="img/blog/vitest.jpg" alt="vitest" className='w-full h-60'/>
                <div className="py-8 px-8">
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate '>Vitest Crash Course</a>
                  </h3>
                  <p className='font-medium text-secondary text-base mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia vel tempore ea beatae quam.
                  </p>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Blog
import React from 'react'

function Portofolio() {
  return (
    <div className="container bg-slate-100">
      <section id='portofolio' className='pt-36 pb-16 '>
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2'>
              Portofolio
            </h4>
            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Project Terbaru
            </h2>
            <p className='font-medium text-md text-secondary md:text-lg'>
            Lihat proyek terbaru saya dalam dunia programming dan web development! 🚀💻
            </p>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://rivensin.github.io/React-Blog-App/" alt='Blog-A'>
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src="img/portofolio/blog-app.png" alt="blog-app" className='w-full'/>
                </div>
                <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                  Blog App
                </h3>
                <p className='font-medium text-base text-secondary'>
                The Blog App is a platform with user authentication, enabling registered users to log in, create and manage their own posts, and explore posts from other users.
                </p>
              </a>
            </div>       
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://rivensin.github.io/Youtube-Home/" target='_blank'>
                {/* <div className='w-[704px] h-[396px] overflow-hidden rounded-lg'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                      setIsHovered(false)
                      setPost({x:50, y:50})
                    }}
                    onMouseMove={handleMouseMove}>
                  <div className='w-full h-full transition duration-300'
                      style={{backgroundImage:"url('img/portofolio/youtube-project.png')", backgroundSize: isHovered ? '120%' : '100%', backgroundPosition:`${post.x}% ${post.y}%`,}}></div>
                </div> */}
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src="img/portofolio/youtube-project.png" alt="React" className='w-full'/>
                </div>
                <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                  Landing Page Youtube
                </h3>
                <p className='font-medium text-base text-slate-600'>
                A simple landing page built with HTML & CSS to practice utility classes, layouts, and responsiveness.
                </p>
              </a>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://rivensin.github.io/amazon-copy.com/">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src="img/portofolio/amazon.png" alt="appwrite" className='w-full'/>
                </div>
                <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                  Simple Amazon E-Commerce Web 
                </h3>
                <p className='font-medium text-base text-slate-600'>
                  A simple copy Of Amazon E-commerce Website built with HTML,CSS,JavaScript to practice JavaScript feature
                </p>
              </a>
            </div>              
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="img/portofolio/tailwindcss.jpg" alt="tailwind" className='w-full'/>
              </div>
              <h3 className='font-semibold text-dark text-xl mt-5 mb-3'>
                Landing Page Riven - Tailwind
              </h3>
              <p className='font-medium text-base text-secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi dolore commodi?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portofolio
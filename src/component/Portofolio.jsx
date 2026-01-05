import { Link } from "react-router-dom"

function Portofolio() {
  return (
    <div className="container bg-slate-100">
      <section id='portofolio' className='pt-36 pb-16'>
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='main-title'>
              Portofolio
            </h4>
            <h2 className='sub-title text-dark'>
              Project Terbaru
            </h2>
            <p className='text-md detail-title'>
            Lihat proyek terbaru saya dalam dunia programming dan web development! 🚀💻
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center">
            <div className="portofolio-card">
              <Link to="https://dlooti.vercel.app/" target='_blank' alt='Dlooti App'>
                <div className="portofolio-img">
                  <img src="img/portofolio/dlooti.png" alt="Dlooti App" className='w-full'/>
                </div>
                <h3 className='portofolio-title'>
                  Dlooti Webpage <span className='portofolio-title-date'>(Juni 2025 - Juli 2025)</span>
                </h3>
                <p className='portofolio-detail'>
                  Dlooti, a cake shop product catalog website based on Next.js and Firebase, makes it easy for users to browse products like soft cookies, brownies, and custom cakes, and leave reviews after logging in.
                </p>
              </Link>
            </div>
            <div className="portofolio-card">
              <Link to="https://dlooti-tracking-package.vercel.app/" target='_blank' alt='Dlooti Tracking App'>
                <div className="portofolio-img">
                  <img src="img/portofolio/dlooti-tracking.png" alt="Dlooti Tracking App" className='w-full'/>
                </div>
                <h3 className='portofolio-title'>
                  Dlooti Tracking Delivery <span className='portofolio-title-date'>(Agustus 2025 - September 2025)</span>
                </h3>
                <p className='portofolio-detail'>
                  Next.js + Firebase app enabling real-time driver tracking, geocoded addresses, and delivery status management to give the information about delivery to the client.
                </p>
              </Link>
            </div>   
            <div className="portofolio-card">
              <Link to="https://github.com/Rivensin/laravel-nextjs" target='_blank' alt='Laravel Nextjs'>
                <div className="portofolio-img">
                  <img src="img/portofolio/laravel-nextjs.png" alt="Laravel Nextjs" className='w-full'/>
                </div>
                <h3 className='portofolio-title'>
                  Product Management Web With Laravel & Nextjs
                </h3>
                <p className='portofolio-detail'>
                The Product Management is a platform created by Laravel as backend and Nextjs as frontend with user authentication, enabling registered users to log in, create and manage their own product, and make receipt for the sales.
                </p>
              </Link>
            </div>  
            <div className="portofolio-card">
              <Link to="https://rivensin.github.io/React-Blog-App/" target='_blank' alt='React Blog App'>
                <div className="portofolio-img">
                  <img src="img/portofolio/blog-app.png" alt="React Blog App" className='w-full'/>
                </div>
                <h3 className='portofolio-title'>
                  Blog App
                </h3>
                <p className='portofolio-detail'>
                The Blog App is a platform with user authentication, enabling registered users to log in, create and manage their own posts, and explore posts from other users.
                </p>
              </Link>
            </div>       
            <div className="portofolio-card">
              <Link to="https://rivensin.github.io/Youtube-Home/" target='_blank' alt='Youtube'>
                <div className="portofolio-img">
                  <img src="img/portofolio/youtube-project.png" alt="Youtube" className='w-full'/>
                </div>
                <h3 className='portofolio-title'>
                  Landing Page Youtube
                </h3>
                <p className='portofolio-detail'>
                A simple landing page built with HTML & CSS to practice utility classes, layouts, and responsiveness.
                </p>
              </Link>
            </div>
            <div className="portofolio-card">
              <Link to="https://rivensin.github.io/amazon-copy.com/" target='_blank' alt="Amazon Clone">
                <div className="portofolio-img">
                  <img src="img/portofolio/amazon.png" alt="Amazon Clone" className='w-full'/>
                </div>
                <h3 className='portofolio-title'>
                  Simple Amazon E-Commerce Web 
                </h3>
                <p className='portofolio-detail'>
                  A simple copy Of Amazon E-commerce Website built with HTML,CSS,JavaScript to practice JavaScript feature
                </p>
              </Link>
            </div>              
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portofolio
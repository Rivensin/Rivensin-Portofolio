import { Link } from 'react-router-dom'
import { blog } from '../const/blog'

function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 container bg-slate-100 overflow-hidden">
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
        <div className="flex overflow-x-scroll gap-4">
          {blog.map(blog => (
            <div className="w-full group">
              <Link to={blog.link} target='_blank'>
                <div className="blog-card">
                  <div>
                    <img src={blog.img} alt={blog.title} className='blog-picture' />
                  </div>
                  <div className="blog-detail">
                    <div className='text-md blog-title'>
                      {blog.title}
                    </div>
                    <div className='blog-desc-card'>
                      <p className='blog-desc'>
                        {blog.desc}
                      </p>
                    </div>
                    <div>
                      <div className='blog-link-bottom'>
                        Baca Selengkapnya
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}          
        </div>  
      </div>
    </section>
  )
}

export default Blog
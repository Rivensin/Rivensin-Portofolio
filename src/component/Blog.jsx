import { Link } from 'react-router-dom'

function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 container bg-slate-100">
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
        <div className="flex overflow-x-scroll">
          <div className="w-full px-4">
            <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
              <div className='w-full'>
                <img src="img/blog/How-to-Become-a-Front-End-Developer-in-2020.png" alt="programming" className='w-full h-60 lg:h-72'/>
              </div>
              <div className="py-8 px-8 h-60">
                <div>
                  <h3>
                    <Link to="/My-Frontend-Dev-Learning-Journey" className='block mb-3 font-semibold text-md lg:text-xl text-dark hover:text-primary w-full truncate duration-700 transition-all'>My Frontend Developer Learning Journey</Link>
                  </h3>
                </div>
                <div className='w-full h-[96px] mb-2'>
                  <p className='font-medium text-secondary mb-6 text-sm line-clamp-4 text-justify leading-relaxed'>
                    Menjadi seorang Frontend Developer membutuhkan kombinasi keterampilan teknis, logika berpikir, dan kepekaan terhadap desain. Seorang pengembang frontend bertanggung jawab membangun tampilan serta interaksi yang langsung dirasakan pengguna di sebuah aplikasi atau website. Untuk memulai perjalanan di bidang ini, calon developer perlu memahami dasar-dasar HTML, CSS, dan JavaScript, sebelum berlanjut ke framework modern seperti React, Next.js, atau Vue. Selain kemampuan koding, penting juga untuk menguasai versi kontrol (Git & GitHub), memahami responsive design, serta memiliki pengetahuan dasar tentang API dan cara kerja browser. Tidak kalah penting, seorang frontend developer juga perlu mengembangkan kemampuan problem-solving, logika algoritma, serta komunikasi tim yang baik agar mampu menerjemahkan ide menjadi pengalaman pengguna yang fungsional dan menarik.
                  </p>
                </div>
                <div>
                  <Link to="/My-Frontend-Dev-Learning-Journey" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80 duration-700 transition-all'>
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
              <img src="img/blog/figma.jpg" alt="figma" className='w-full h-60 lg:h-72'/>
              <div className="py-8 px-8 h-60">
                <div>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-md lg:text-xl text-dark hover:text-primary w-full truncate duration-700 transition-all'>Design Menggunakan Figma</a>
                  </h3>
                </div>
                <div className='w-full h-[96px] mb-2'>
                  <p className='font-medium text-secondary mb-6 text-sm line-clamp-4 text-justify leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, minus rem natus mollitia blanditiis vero illo nesciunt, ipsam cumque velit corrupti labore expedita omnis. Laudantium eos qui eveniet quisquam atque quas provident perspiciatis, est porro? Quos cumque autem consequuntur eligendi possimus similique molestiae aspernatur, necessitatibus eaque laboriosam dignissimos exercitationem accusamus laudantium saepe excepturi sequi recusandae? Aspernatur, quas blanditiis! Modi, enim tempore, dolorem quibusdam velit fugiat voluptate at ratione aut, neque harum laudantium aspernatur! Explicabo libero quasi quidem.
                  </p>
                </div>
                <div>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80 duration-700 transition-all'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
              <div>
                <img src="img/blog/vitest.jpg" alt="vitest" className='w-full h-60 lg:h-72'/>
              </div>
              <div className="py-8 px-8 h-60">
                <div>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-md lg:text-xl text-dark hover:text-primary w-[360px] truncate duration-700 transition-all'>Vitest Crash Course</a>
                  </h3>
                </div>
                <div className='w-full h-[96px] mb-2'>
                  <p className='font-medium text-secondary mb-6 text-sm line-clamp-4 text-justify leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia vel tempore ea beatae quam.
                  </p>
                </div>
                <div>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80 duration-700 transition-all'>
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
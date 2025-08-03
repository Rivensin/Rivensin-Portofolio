import React from 'react'

function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 pr-4 container bg-slate-100">
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
                <img src="img/blog/programming-languages.jpg" alt="programming" className='w-full h-60'/>
              </div>
              <div className="py-8 px-8 h-60">
                <div>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary w-[360px] truncate'>Tips Belajar Programming</a>
                  </h3>
                </div>
                <div className='w-full h-[96px] mb-4'>
                  <p className='font-medium text-secondary text-base mb-6 line-clamp-3 2xl:line-clamp-4'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ducimus maxime consectetur velit totam, placeat necessitatibus repellendus! Fugiat rerum quas, laborum nobis odio, doloribus corrupti consequuntur eius quia maiores officia explicabo accusamus, sit quaerat deleniti rem quo? Nihil non voluptatum eveniet sunt impedit, tempore eum tempora id voluptate corporis, quod vitae eius repudiandae ullam sit laboriosam. Vitae doloremque impedit rem quod modi excepturi consectetur vel aperiam officiis! Delectus voluptas quas cumque nisi ad quae illum, eveniet perspiciatis.
                  </p>
                </div>
                <div>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
              <img src="img/blog/figma.jpg" alt="figma" className='w-full h-60'/>
              <div className="py-8 px-8 h-60">
                <div>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary w-[360px] truncate '>Design Menggunakan Figma</a>
                  </h3>
                </div>
                <div className='w-full h-[96px] mb-4'>
                  <p className='font-medium text-secondary text-base mb-6 line-clamp-3 2xl:line-clamp-4'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, minus rem natus mollitia blanditiis vero illo nesciunt, ipsam cumque velit corrupti labore expedita omnis. Laudantium eos qui eveniet quisquam atque quas provident perspiciatis, est porro? Quos cumque autem consequuntur eligendi possimus similique molestiae aspernatur, necessitatibus eaque laboriosam dignissimos exercitationem accusamus laudantium saepe excepturi sequi recusandae? Aspernatur, quas blanditiis! Modi, enim tempore, dolorem quibusdam velit fugiat voluptate at ratione aut, neque harum laudantium aspernatur! Explicabo libero quasi quidem.
                  </p>
                </div>
                <div>
                  <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
              <div>
                <img src="img/blog/vitest.jpg" alt="vitest" className='w-full h-60'/>
              </div>
              <div className="py-8 px-8 h-60">
                <div>
                  <h3>
                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-primary w-[360px] truncate '>Vitest Crash Course</a>
                  </h3>
                </div>
                <div className='w-full h-[96px] mb-4'>
                  <p className='font-medium text-secondary text-base mb-6 line-clamp-3 2xl:line-clamp-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia vel tempore ea beatae quam.
                  </p>
                </div>
                <div>
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
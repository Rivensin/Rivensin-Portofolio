import { Link } from 'react-router-dom'

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
          <div className="w-full group">
            <Link to="/My-Frontend-Dev-Learning-Journey" target='_blank'>
            <div className="blog-card">
              <div>
                <img src="img/blog/How-to-Become-a-Front-End-Developer-in-2020.png" alt="programming" className='blog-picture'/>
              </div>
              <div className="blog-detail">
                <div className='text-md blog-title'>
                  My Frontend Developer Learning Journey
                </div>
                <div className='blog-desc-card'>
                  <p className='blog-desc'>
                    Menjadi seorang Frontend Developer membutuhkan kombinasi keterampilan teknis, logika berpikir, dan kepekaan terhadap desain. Seorang pengembang frontend bertanggung jawab membangun tampilan serta interaksi yang langsung dirasakan pengguna di sebuah aplikasi atau website. Untuk memulai perjalanan di bidang ini, calon developer perlu memahami dasar-dasar HTML, CSS, dan JavaScript, sebelum berlanjut ke framework modern seperti React, Next.js, atau Vue. Selain kemampuan koding, penting juga untuk menguasai versi kontrol (Git & GitHub), memahami responsive design, serta memiliki pengetahuan dasar tentang API dan cara kerja browser. Tidak kalah penting, seorang frontend developer juga perlu mengembangkan kemampuan problem-solving, logika algoritma, serta komunikasi tim yang baik agar mampu menerjemahkan ide menjadi pengalaman pengguna yang fungsional dan menarik.
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
          
          <div className="w-full group">
            <Link to="/Malice" target='_blank'>
              <div className="blog-card">
                <div>
                  <img src="img/blog/Malice.jpg" alt="Malice" className='blog-picture'/>
                </div>
                <div className="blog-detail">
                  <div className='text-md blog-title'>
                    Review Novel 'Malice' by Keigo Higashino
                  </div>
                  <div className='blog-desc-card'>
                    <p className='blog-desc'>
                    Aku membaca Malice karena penasaran dengan karya Keigo Higashino sebagai salah satu penulis misteri terbaik dari Jepang. Banyak yang bilang kisahnya bukan sekadar mencari siapa pembunuhnya, tapi kenapa seseorang bisa melakukan pembunuhan. Awalnya karena rekomendasi dari orang yang telah membaca buku misteri dari Akiyoshi Rikako.
                    </p>
                  </div>
                  <div className='blog-link-bottom'>
                    Baca Selengkapnya
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full group">
            <Link to="/HolyMother" target='_blank'>
              <div className="blog-card">
                <div>
                  <img src="img/blog/holy-mother.jpg" alt="holymother" className='blog-picture'/>
                </div>
                <div className="blog-detail">
                  <div className='text-md blog-title'>
                    Review Novel 'Holy Mother' by Akiyoshi Rikako
                  </div>
                  <div className='blog-desc-card'>
                    <p className='blog-desc'>
                      Kalau kamu mencari novel misteri psikologis yang tenang di permukaan tapi kejam di dalam, Holy Mother adalah pilihan yang tepat. Akiyoshi Rikako menulis kisah ini seperti seseorang yang sedang membuka lapisan demi lapisan dari jiwa manusia — sampai kamu tak yakin lagi mana yang benar, mana yang salah.
                    </p>
                  </div>
                  <div className='blog-link-bottom'>
                    Baca Selengkapnya
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full group">
            <Link to="/48-Laws-Of-Power" target='_blank'>
              <div className="blog-card">
                <div>
                  <img src="img/blog/48-Laws-of-Power-by-Robert-Greene.jpg" alt="48-Laws-of-Power-by-Robert-Greene" className='blog-picture'/>
                </div>
                <div className="blog-detail">
                  <div className='text-md blog-title'>
                    Review Buku 'The 48 Laws Of Power' by Robert Greene
                  </div>
                  <div className='blog-desc-card'>
                    <p className='blog-desc'>
                      Aku membaca The 48 Laws of Power karena penasaran kenapa buku ini sering disebut kontroversial, bahkan “berbahaya”. Banyak orang bilang buku ini bukan mengajarkan kebaikan, tapi realitas—tentang bagaimana kekuasaan bekerja apa adanya
                    </p>
                  </div>
                  <div className='blog-link-bottom'>
                    Baca Selengkapnya
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>  
      </div>
    </section>
  )
}

export default Blog
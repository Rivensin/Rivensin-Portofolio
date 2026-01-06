import InViewWrapper from "../component/InViewWrapper"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

function LawsOfPower() {
  return (
    <section id="blog" className="pt-36 pb-32 px-4 container bg-slate-100">
      <title>Review Buku 'The 48 Laws Of Power' by Robert Greene</title>
      <InViewWrapper>
        <h4 className='font-semibold text-2xl xl:text-3xl text-primary mb-4 text-center'>
          Blog
        </h4>
        <h2 className='font-bold text-dark text-xl mb-12 sm:text-3xl xl:text-4xl text-center'>
          Review Buku 'The 48 Laws Of Power' by Robert Greene
        </h2>
      </InViewWrapper>
      <div className='relative xl:grid xl:grid-cols-[300px_1fr_300px] xl:min-h-screen'>
        <InViewWrapper className="xl:sticky xl:top-20 xl:h-screen">
          <aside className='font-medium text-secondary md:text-lg text-center mb-6 xl:mb-10 flex flex-col justify-center items-start gap-2 xl:gap-4'> 
            <div className="font-bold border-b-2 border-slate-500 w-full hover:border-b-4 transition-all ease-in-out">
              Table of Contents
            </div>
            <HashLink smooth to='#malice' className="blog-page-nav">Kenapa Harus Baca?</HashLink>
            <HashLink smooth to='#sinopsis' className="blog-page-nav">Sinopsis Cerita</HashLink>
            <HashLink smooth to='#kesan' className="blog-page-nav">Kesan Membaca</HashLink>
            <HashLink smooth to='#kesimpulan' className="blog-page-nav">Kesimpulan</HashLink>
            <div className="block border-b-2 border-slate-500 w-full">
            </div>
          </aside>
        </InViewWrapper>

        <div className='xl:px-8 xl:border-b-2'> 
          <div className='font-medium text-secondary text-justify mb-10'>
            <InViewWrapper>
              <p id='malice' className='font-bold text-2xl'>
                Kenapa Kamu Harus Membaca The 48 Laws Of Power?
              </p>
              <p className='blog-page-desc'>
                Aku membaca The 48 Laws of Power karena penasaran kenapa buku ini sering disebut kontroversial, bahkan “berbahaya”. Banyak orang bilang buku ini bukan mengajarkan kebaikan, tapi realitas—tentang bagaimana kekuasaan bekerja apa adanya, bukan seperti yang idealnya kita inginkan. Rekomendasi ini datang dari diskusi seputar psikologi manusia dan dinamika sosial, terutama soal pengaruh, dominasi, dan strategi bertahan di dunia nyata.
              </p>

              <p className='blog-page-desc'>
                Buku ini tidak mengajarkan moral hitam-putih. Sebaliknya, Robert Greene membedah sejarah, politik, dan hubungan manusia dengan sudut pandang yang dingin dan objektif. Setiap “hukum” bukan sekadar teori, tapi diambil dari kisah nyata tokoh-tokoh berpengaruh—raja, jenderal, politisi, hingga seniman—yang berhasil (atau hancur) karena memahami, atau mengabaikan, hukum kekuasaan.
              </p>

              <p className='blog-page-desc'>
                Kalau kamu tertarik memahami bagaimana kekuasaan benar-benar bekerja di balik layar, bukan bagaimana seharusnya ia bekerja, buku ini layak masuk daftar bacaanmu.
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <div className="blogs-picture-wrap">
                <img src='img/blog/48-Laws-of-Power-by-Robert-Greene2.jpg' alt='48-Laws-of-Power-by-Robert-Greene2' className='blogs-picture'>
                </img>
                <img src='img/blog/48-Laws-of-Power-by-Robert-Greene3.jpg' alt='48-Laws-of-Power-by-Robert-Greene3' className='blogs-picture'>
                </img>
              </div>
            </InViewWrapper>
            
            <InViewWrapper>
              <p id='sinopsis' className='blog-page-title'>
                Sinopsis Cerita
              </p>    
              <p className='blog-page-desc'>
                The 48 Laws of Power berisi 48 prinsip atau “hukum” yang menggambarkan pola perilaku manusia dalam perebutan kekuasaan. Setiap hukum dijelaskan melalui: Kisah sejarah, Analisis psikologis, Contoh penerapan, Sisi terang dan gelap dari hukum tersebut.

                Menariknya, Greene tidak memaksa pembaca untuk “menggunakan” hukum-hukum ini. Buku ini bisa dibaca sebagai panduan bertahan, bukan semata-mata panduan memanipulasi. Dengan memahami hukum kekuasaan, kamu bisa mengenali permainan orang lain—dan tidak menjadi korban tanpa sadar.
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesan' className='blog-page-title'>
                Kesan Membaca
              </p>    
              <p className='blog-page-desc'>
                Membaca buku ini terasa seperti membuka tirai yang selama ini menutupi interaksi sosial. Banyak hukum yang awalnya terasa kejam atau sinis, tapi semakin dibaca, semakin masuk akal. Bukan karena kita ingin menjadi licik, tapi karena dunia sering kali memang tidak adil dan tidak transparan.

                Beberapa hukum terasa sangat relevan dengan kehidupan sehari-hari—di tempat kerja, pertemanan, bahkan keluarga. Ada momen di mana aku berhenti membaca sejenak dan berpikir, “Oh… jadi ini yang sebenarnya terjadi.” Buku ini tidak nyaman, tapi jujur. Ia memaksa pembaca untuk bercermin, melihat ambisi, rasa iri, ego, dan ketakutan dalam diri sendiri              
              </p>

              <p className='blog-page-desc'>
                Yang paling kuat adalah kesadaran bahwa niat baik saja sering tidak cukup. Banyak konflik bukan terjadi karena kebencian besar, tapi karena kesalahan kecil: terlalu menonjol, terlalu jujur, atau salah membaca posisi.
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesimpulan' className='blog-page-title'>
                Kesimpulan
              </p>    
              <p className='blog-page-desc'>
                The 48 Laws of Power adalah buku yang tajam, provokatif, dan realistis. Cocok untuk pembaca yang ingin memahami dinamika kekuasaan, psikologi manusia, dan strategi bertahan dalam dunia yang kompetitif. Ini bukan buku motivasi yang menghibur, tapi buku yang membuka mata.

                Buku ini tidak mengajarkanmu menjadi orang jahat—ia mengajarkanmu agar tidak naif. Karena dalam banyak situasi, kekuasaan tidak dimiliki oleh mereka yang paling baik, tapi oleh mereka yang paling paham permainan.

                Jika kamu siap membaca sesuatu yang jujur, dingin, dan kadang tidak nyaman, The 48 Laws of Power adalah buku yang akan terus terngiang lama setelah halaman terakhir ditutup.
              </p>
            </InViewWrapper>
          </div>
        </div>      

        <InViewWrapper className='xl:sticky xl:top-20 xl:h-screen'>
          <aside className='font-medium text-lg text-secondary md:text-lg text-center mb-10'> 
            <div className="border-b-2 border-slate-500 w-full hover:border-b-4 transition-all ease-in-out">
              Artikel Lainnya : 
            </div>
            <p className='mt-4 rounded-xl mb-10 overflow-hidden group hover:shadow-lg hover:translate-y-2 transition-all ease-in-out duration-700'>
              <Link to='/My-Frontend-Dev-Learning-Journey' target="_blank">
                <div>
                  <img src='img/blog/How-to-Become-a-Front-End-Developer-in-2020.png' className="blog-artikel"></img>
                  <div className="mt-1 text-black">My Frontend Developer Learning Journey</div>
                </div>
              </Link>
            </p>

            <p className='rounded-xl mb-10 overflow-hidden group hover:shadow-lg hover:translate-y-2 transition-all ease-in-out duration-700'>
              <Link to='/HolyMother' target="_blank">
                <div>
                  <img src='img/blog/holy-mother.jpg' className="blog-artikel"></img>
                  <div className="mt-1 text-black">Review Novel 'Holy Mother' by Akiyoshi Rikako</div>
                </div>
              </Link>
            </p>

            <p className='rounded-xl mb-10 overflow-hidden group hover:shadow-lg hover:translate-y-2 transition-all ease-in-out duration-700'>
              <Link to='/Malice' target="_blank">
                <div>
                  <img src='img/blog/Malice.jpg' className="blog-artikel"></img>
                  <div className="mt-1 text-black">Review Novel 'Malice' by Keigo Higashino</div>
                </div>
              </Link>
            </p>

            <p className='rounded-xl mb-10 overflow-hidden group hover:shadow-lg hover:translate-y-2 transition-all ease-in-out duration-700'>
              <Link to='/GirlInTheDark' target="_blank">
                <div>
                  <img src='img/blog/Girls-In-The-Dark2.jpg' className="blog-artikel"></img>
                  <div className="mt-1 pr-4 lg:text-lg xl:text-xl leading-[1.8] text-black">Review Novel 'Girl in the Dark' by Akiyoshi Rikako</div>
                </div>
              </Link>
            </p>
          </aside>     
        </InViewWrapper>
      </div>      
    </section>
  )
}

export default LawsOfPower
import InViewWrapper from "../component/InViewWrapper"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

export default function HolyMother() {
  return (
    <section id="blog" className="pt-36 pb-32 px-4 container bg-slate-100">
      <title>Review Novel 'Holy Mother' by Akiyoshi Rikako</title>
      <InViewWrapper>
        <h4 className='font-semibold text-2xl xl:text-3xl text-primary mb-4 text-center'>
          Blog
        </h4>
        <h2 className='font-bold text-dark text-xl mb-12 sm:text-3xl xl:text-4xl text-center'>
          Review Novel 'Holy Mother' by Akiyoshi Rikako
        </h2>
      </InViewWrapper>
      <div className='relative xl:grid xl:grid-cols-[300px_1fr_300px] xl:min-h-screen'>
        <InViewWrapper className="xl:sticky xl:top-20 xl:h-96">
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

        <div className='xl:px-8'> 
          <div className='font-medium text-secondary text-justify mb-10'>
            <InViewWrapper>
              <p id='malice' className='font-bold text-2xl'>
                Kenapa Kamu Harus Membaca Holy Mother?
              </p>
              <p className='blog-page-desc'>
                Aku membaca Holy Mother karena penasaran dengan karya Akiyoshi Rikako sebagai salah satu penulis misteri terbaik dari Jepang. Kalau kamu mencari novel misteri psikologis yang tenang di permukaan tapi kejam di dalam adalah pilihan yang tepat seperti seseorang yang sedang membuka lapisan demi lapisan dari jiwa manusia — sampai kamu tak yakin lagi mana yang benar, mana yang salah. 
              </p>

              <p className='blog-page-desc'>
                Kisahnya tidak berisik, tidak penuh aksi, tapi setiap kalimatnya terasa seperti luka yang disayat perlahan. Ia membuat kita mempertanyakan. Apakah cinta selalu suci? Atau kadang justru menjadi alasan paling berbahaya untuk berbuat dosa? dan apakah cinta dapat melakukan segala cara yang dapat dilakukan untuk memperjuangkan cinta itu?
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='sinopsis' className='blog-page-title'>
                Sinopsis Cerita
              </p>    
              <p className='blog-page-desc'>
                Novel Holy Mother mengikuti kisah Honami, seorang wanita yang sulit memiliki anak akibat penyakit yang dideritanya. Penyakit ini merupakan mimpi buruk bagi Honami yang sangat mengharapkan keturunan. Honami pun menempuh segala cara akan tetapi, semua upayanya selalu berujung pada kegagalan.Perjuangan Honami pun berakhir dengan keberuntungan saat akhirnya ia berhasil hamil dan melahirkan anak perempuan. Honami dan anaknya yang bernama Kaoru hidup damai di wilayah Aiide, tempat yang terkenal karena ketenangannya.  
              </p>
              <p className='blog-page-desc'>
                Meski tinggal di daerah yang jauh dari kriminalitas, hidup Honami dan Kaoru ternyata tak luput dari masalah. Tiba-tiba ancaman datang ketika kasus pembunuhan anak laki-laki di area itu meneror Aiide yang damai. Hati Honami pun terguncang, apalagi pembunuhan tersebut termasuk sadis. Insting Honami bergerak tajam dan ia berusaha melakukan segala cara untuk menjaga putrinya.  
              </p>
              <p className='blog-page-desc'>
                Di sisi lain, penyelidikan polisi belum menemukan titik terang dan tidak ada pelaku yang tertangkap. Penyelidikan para detektif yang gagal membuat Honami makin takut hingga akhirnya ia memutuskan melindungi Kaoru dengan caranya sendiri. Kisah Honami dan Kaoru berjalan berdampingan dengan Makoto, pelajar SMA dengan kehidupan yang unik. Dua karakter ini, Honami dan Makoto dipertemukan dalam novel Holy Mother yang tiap plotnya dibalut dengan misteri
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesan' className='blog-page-title'>
                Kesan Membaca
              </p>    
              <p className='blog-page-desc'>
                Membaca Holy Mother seperti berjalan di tengah kabut tebal semuanya tampak tenang, tapi kamu tahu ada sesuatu yang menunggu di baliknya. Bahasanya halus dan mudah diikuti, tapi justru dari kesederhanaan itulah muncul ketegangan yang mencekam. 
              </p>
              <p className='blog-page-desc'>
                Akiyoshi menulis dengan gaya yang tenang, namun menyimpan intensitas yang semakin tajam di setiap halaman. Yang saya sukai, penulis tidak terburu-buru membangun konflik. Ia membiarkan pembaca perlahan mengenal Makoto, memahami dunia kecilnya, dan tanpa sadar ikut larut dalam kenyamanannya sebelum segalanya mulai berubah. Novel ini bukan tentang siapa pelaku, tapi tentang apa yang mampu dilakukan seseorang ketika hidup dan cintanya terancam.           
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesimpulan' className='blog-page-title'>
                Kesimpulan
              </p>    
              <p className='blog-page-desc'>
                Holy Mother adalah novel misteri psikologis yang sunyi tapi menusuk. Tanpa perlu adegan brutal atau teka-teki rumit, Akiyoshi Rikako berhasil menciptakan kisah yang meninggalkan bekas mendalam — tentang kasih, kehilangan, dan keputusan ekstrem yang bisa lahir dari rasa sayang. Bagi kamu yang menyukai misteri bergaya Keigo Higashino tapi ingin nuansa yang lebih emosional, feminin, dan penuh lapisan moral, Holy Mother akan jadi pengalaman membaca yang intens dan tak terlupakan.
              </p>
            </InViewWrapper>
          </div>
        </div>      

        <InViewWrapper className='xl:sticky xl:top-20 xl:h-screen'>
          <aside className='font-medium text-lg text-secondary md:text-lg text-center mb-10 '> 
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
              <Link to='/Malice' target="_blank">
                <div>
                  <img src='img/blog/Malice.jpg' className="blog-artikel"></img>
                  <div className="mt-1 text-black">Review Novel 'Malice' by Keigo Higashino</div>
                </div>
              </Link>
            </p>  
          </aside>     
        </InViewWrapper>
      </div>      
    </section>
  )
}


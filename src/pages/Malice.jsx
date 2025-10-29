import InViewWrapper from "../component/InViewWrapper"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

export default function Malice() {
  return (
    <section id="blog" className="pt-36 pb-32 px-4 container xl:container bg-slate-100">
      <title>Review Novel 'Malice' by Keigo Higashino</title>
      <InViewWrapper>
        <h4 className='font-semibold text-2xl xl:text-3xl text-primary mb-4 text-center'>
          Blog
        </h4>
        <h2 className='font-bold text-dark text-xl mb-12 sm:text-3xl xl:text-4xl text-center'>
          Review Novel 'Malice' by Keigo Higashino
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
                Kenapa Kamu Harus Membaca Malice?
              </p>
              <p className='blog-page-desc'>
                Aku membaca Malice karena penasaran dengan karya Keigo Higashino sebagai salah satu penulis misteri terbaik dari Jepang. Banyak yang bilang kisahnya bukan sekadar mencari siapa pembunuhnya, tapi kenapa seseorang bisa melakukan pembunuhan. Awalnya karena rekomendasi dari orang yang telah membaca buku misteri dari Akiyoshi Rikako.
              </p>

              <p className='blog-page-desc'>
                Ceritanya tidak mengandalkan aksi atau darah, tapi kekuatan psikologis dan logika. Struktur dua sudut pandang (pelaku dan detektif) membuat pembaca diajak memahami dua sisi manusia secara jujur. Motifnya realistis dan emosional, bukan hanya sekadar “plot twist demi plot twist.”
              </p>

              <p className='blog-page-desc'>
                Kalau kamu suka cerita misteri dengan plot twist yang halus tapi mengguncang, Malice karya Keigo Higashino adalah salah satu novel yang nggak boleh kamu lewatkan. Ini bukan sekadar kisah pembunuhan — tapi perjalanan menyelami motif terdalam manusia, yang kadang lebih gelap dari kejahatannya sendiri.
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='sinopsis' className='blog-page-title'>
                Sinopsis Cerita
              </p>    
              <p className='blog-page-desc'>
                Ceritanya dimulai dengan pembunuhan seorang penulis terkenal, Kunihiko Hidaka. Semua bukti mengarah pada sahabatnya sendiri, Osamu Nonoguchi. Tapi sejak awal, ada sesuatu yang terasa “tidak pas.”
                Yang menarik, Higashino nggak membuat kita menebak siapa pelakunya karena itu sudah jelas sejak awal. Justru misteri utamanya adalah “kenapa?”. Kenapa seseorang yang tampak begitu dekat bisa membunuh dengan cara yang begitu dingin dan terencana?
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesan' className='blog-page-title'>
                Kesan Membaca
              </p>    
              <p className='blog-page-desc'>
                Bagi saya, Malice adalah pengalaman membaca yang pelan tapi menegangkan. Higashino membuat setiap detail terasa berarti — dari cara tokohnya menulis catatan harian, sampai percakapan yang tampak biasa tapi ternyata menyimpan lapisan makna.
                Rasanya seperti menonton duel intelektual antara dua orang yang sama-sama cerdas, tapi satu di antaranya menyimpan dendam yang begitu dalam dan personal.                
              </p>

              <p className='blog-page-desc'>
                Saya sempat berpikir kisahnya hanya tentang kecemburuan dan iri hati, tapi semakin dalam dibaca, makin terasa betapa kompleks dan menyakitkannya alasan di balik pembunuhan itu. Dan bagian akhir... benar-benar membuat saya terdiam beberapa saat. Yang paling menempel di benak saya adalah bagaimana kebencian bisa tumbuh dari hal-hal kecil — pujian, perbandingan, bahkan perhatian. Higashino menulis dengan dingin, tapi menyentuh. Ia membuat kita sadar bahwa kadang yang paling kita benci adalah cermin diri kita sendiri.
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesimpulan' className='blog-page-title'>
                Kesimpulan
              </p>    
              <p className='blog-page-desc'>
                Malice adalah novel yang cerdas dan emosional, cocok untuk pembaca yang menikmati misteri psikologis dengan ritme tenang tapi menusuk. Tanpa perlu darah atau kejar-kejaran, Higashino membuktikan bahwa kejahatan paling menarik justru lahir dari pikiran dan perasaan manusia itu sendiri.
              </p>
            </InViewWrapper>
          </div>
        </div>      

        <InViewWrapper className='xl:sticky xl:top-20 xl:h-96'>
          <aside className='font-medium text-lg text-secondary md:text-lg text-center mb-10'> 
            <div className="border-b-2 border-slate-500 w-full hover:border-b-4 transition-all ease-in-out">
              Artikel Lainnya : 
            </div>
            <p className='mt-4 rounded-xl mb-10 overflow-hidden group hover:shadow-lg hover:translate-y-2 transition-all ease-in-out duration-700'>
              <Link to='/My-Frontend-Dev-Learning-Journey' target="_blank">
                <div>
                  <img src='img/blog/How-to-Become-a-Front-End-Developer-in-2020.png'></img>
                  <div className="mt-1 text-black">My Frontend Developer Learning Journey</div>
                </div>
              </Link>
            </p>
          </aside>     
        </InViewWrapper>
      </div>      
    </section>
  )
}


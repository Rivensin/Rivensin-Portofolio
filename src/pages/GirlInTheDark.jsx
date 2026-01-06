import InViewWrapper from "../component/InViewWrapper"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

function GirlInTheDark() {
  return (
    <section id="blog" className="pt-36 pb-32 px-4 container bg-slate-100">
      <title>Review Novel 'Girl in the Dark' by Akiyoshi Rikako</title>
      <InViewWrapper>
        <h4 className='font-semibold text-2xl xl:text-3xl text-primary mb-4 text-center'>
          Blog
        </h4>
        <h2 className='font-bold text-dark text-xl mb-12 sm:text-3xl xl:text-4xl text-center'>
          Review Novel 'Girl in the Dark' by Akiyoshi Rikako
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
                Kenapa Kamu Harus Membaca Girl in the Dark?
              </p>
              <p className='blog-page-desc'>
                Aku membaca Girl in the Dark karena penasaran dengan cara Akiyoshi Rikako menulis kisah misteri yang berpusat pada psikologi perempuan. Dari beberapa karyanya, Rikako dikenal tidak sekadar membangun teka-teki kriminal, tetapi juga menelanjangi sisi gelap emosi manusia—rasa iri, cemburu, luka batin, dan ketidakjujuran terhadap diri sendiri.
              </p>

              <p className='blog-page-desc'>
                Berbeda dengan misteri konvensional yang fokus pada pembunuhan dan penyelidikan, Girl in the Dark terasa lebih personal dan intim. Ceritanya bergerak melalui sudut pandang remaja perempuan, dengan konflik yang tampak sederhana di permukaan, namun menyimpan tekanan psikologis yang pelan-pelan mencekik. Tidak ada aksi berlebihan atau kejutan bombastis, tapi ketegangan tumbuh dari relasi antar karakter dan rahasia yang dipendam terlalu lama. Kalau kamu menyukai cerita misteri yang sunyi, perlahan, dan menusuk perasaan, Girl in the Dark adalah bacaan yang patut kamu coba.
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <div className="blogs-picture-wrap">
                <img src='img/blog/Girls-In-The-Dark.jpg' alt='Cover Novel Girls-In-The-Dark' className='blogs-picture'>
                </img>
                <img src='img/blog/girls-in-the-dark-3.png' alt='Cover Novel Girls-In-The-Dark' className='blogs-picture'>
                </img>
              </div>
            </InViewWrapper>

            <InViewWrapper>
              <p id='sinopsis' className='blog-page-title'>
                Sinopsis Cerita
              </p>    
              <p className='blog-page-desc'>
                Cerita berpusat pada kehidupan seorang siswi SMA yang hidup di bawah bayang-bayang masa lalu dan hubungan pertemanan yang tidak sesederhana kelihatannya. Ketika sebuah peristiwa tragis terjadi, kebenaran tidak langsung terungkap melalui penyelidikan formal, melainkan lewat ingatan, prasangka, dan sudut pandang yang saling bertabrakan.  
              </p>
              <p className='blog-page-desc'>
                Yang membuat novel ini menarik, Akiyoshi Rikako tidak buru-buru mengarahkan pembaca pada “siapa yang salah.” Sebaliknya, ia membiarkan kita tenggelam dalam pikiran tokohnya—merasakan kebingungan, rasa bersalah, dan ketakutan yang bercampur dengan keinginan untuk dipahami. Misterinya bukan hanya tentang apa yang terjadi, tetapi bagaimana setiap karakter memaknai kejadian itu dengan caranya masing-masing.  
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesan' className='blog-page-title'>
                Kesan Membaca
              </p>    
              <p className='blog-page-desc'>
                Membaca Girl in the Dark terasa seperti menyusuri lorong gelap pikiran remaja—sunyi, sempit, dan penuh gema emosi yang tidak terucap. Ritmenya tenang, bahkan cenderung lambat, tapi justru di situlah kekuatannya. Setiap dialog, setiap reaksi kecil, terasa punya beban.
              </p>
              <p className='blog-page-desc'>
                Awalnya aku mengira cerita ini hanya tentang konflik remaja dan trauma masa lalu. Namun semakin dibaca, semakin terasa bahwa novel ini berbicara tentang identitas, rasa tidak aman, dan bagaimana seseorang bisa kehilangan arah saat terlalu lama hidup dalam bayangan orang lain. Tidak ada karakter yang benar-benar “jahat” atau “baik”—semuanya manusia, dengan luka dan kesalahan masing-masing.           
              </p>
              <p className='blog-page-desc'>
                Bagian akhirnya tidak meledak-ledak, tapi meninggalkan rasa dingin yang menetap. Seperti menyadari bahwa terkadang, kegelapan terbesar bukan datang dari kejadian tragis, melainkan dari cara kita memendam dan memutar ulangnya di kepala sendiri.           
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='kesimpulan' className='blog-page-title'>
                Kesimpulan
              </p>    
              <p className='blog-page-desc'>
                Girl in the Dark adalah novel misteri psikologis yang halus, muram, dan emosional. Cocok untuk pembaca yang menikmati cerita dengan ketegangan batin, bukan aksi. Akiyoshi Rikako menunjukkan bahwa misteri paling menyakitkan bukan selalu soal kematian, tetapi tentang hubungan, perasaan terpendam, dan kebenaran yang terlalu sulit untuk dihadapi.
              </p>

              <p className='blog-page-desc'>
                Ini bukan novel yang akan membuatmu terpaku karena kejutan besar, melainkan yang membuatmu terdiam setelah selesai membaca. Karena pada akhirnya, Girl in the Dark mengingatkan kita bahwa kadang, musuh paling menakutkan bukan orang lain—melainkan sisi gelap dalam diri kita sendiri.
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

            <p className='rounded-xl mb-10 overflow-hidden group hover:shadow-lg hover:translate-y-2 transition-all ease-in-out duration-700'>
              <Link to='/48-Laws-Of-Power' target="_blank">
                <div>
                  <img src='img/blog/48-Laws-of-Power-by-Robert-Greene.jpg' className="blog-artikel"></img>
                  <div className="mt-1 text-black">Review Novel 'The 48 Laws Of Power' by Robert Greene</div>
                </div>
              </Link>
            </p>

            <p className='rounded-xl mb-10 overflow-hidden group hover:shadow-lg hover:translate-y-2 transition-all ease-in-out duration-700'>
              <Link to='/HolyMother' target="_blank">
                <div>
                  <img src='img/blog/holy-mother.jpg' className="blog-artikel"></img>
                  <div className="mt-1 pr-4 lg:text-lg xl:text-xl leading-[1.8] text-black">Review Novel 'Holy Mother' by Akiyoshi Rikako</div>
                </div>
              </Link>
            </p>
          </aside>     
        </InViewWrapper>
      </div>      
    </section>
  )
}

export default GirlInTheDark
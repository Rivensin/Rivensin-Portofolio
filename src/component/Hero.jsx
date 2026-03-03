import Skill from "./Skill"

function Hero() {
  
  return (
    <section id='home' className='pt-28 container overflow-hidden bg-slate-100 py-10'>
      <div className="w-full lg:flex flex-wrap lg:mx-2 xl:mx-7 px-4 justify-center items-center">
        <div className="lg:w-1/2">
          <h1 className='text-base font-semibold text-primary md:text-xl mb-2'>Halo Semua✌, saya 
            <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl mb-2'>Rivensin</span>
          </h1>
          <h2 className='text-secondary font-medium text-lg lg:text-2xl mb-5'>
            Front End Developer
          </h2>
          <p className='font-medium text-secondary leading-relaxed 2xl:text-lg text-justify mb-2'>
            Selamat datang di portofolio saya! Portofolio ini merupakan kumpulan proyek-proyek yang saya kerjakan menggunakan teknologi seperti ReactJS, Next.js. 
          </p>
          <p className='font-medium text-secondary leading-relaxed 2xl:text-lg text-justify mb-10'>
            Setiap proyek yang saya tampilkan merefleksikan proses belajar, eksplorasi, dan semangat saya dalam dunia pengembangan web.
          </p>
          <p className="font-semibold">
            Skills
          </p>

          <div className="flex gap-4 lg:gap-6 mt-3 mb-6 lg:mb-8 flex-wrap">
            <Skill skill='ReactJS' img='img/icon/reactjs-svgrepo-com.png' />
            <Skill skill='ReactNative' img='img/icon/react-native-1.png' />
            <Skill skill='NextJS' img='img/icon/nextjs-svgrepo-com.png' />
            <Skill skill='Typescript' img='img/icon/typescript-svgrepo-com.png' />
            <Skill skill='Tailwind' img='img/icon/tailwind-svgrepo-com.png' />
            <Skill skill='Vercel' img='img/icon/vercel-svgrepo-com.png' />
            <Skill skill='Jest' img='img/icon/jest-snapshot-svgrepo-com.png' />
            <Skill skill='NodeJS' img='img/icon/nodejs-svgrepo-com.png' />
            <Skill skill='PostgreSQL' img='img/icon/postgresql-svgrepo-com.png' />
            <Skill skill='Prisma' img='img/icon/light-prisma-svgrepo-com.png' />
          </div>
          <a href="https://wa.me/+6282384090452" target='_blank'>
            <div className='text-base font-semibold text-white bg-primary w-40 h-11 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out flex justify-center items-center'>
            <img src='img/icon/whatsapp.png' alt='WhatsApp' className='w-5 h-5 mr-2'></img>
            <div>Hubungi saya</div>
            </div>
          </a>
        </div>

        <div className='lg:w-1/2 overflow-hidden'>
          <div className="mt-10 relative lg:mt-0 lg:right-0 ml-4 overflow-hidden rounded-lg">
            <img src="img/1725381035677.png" alt="creator" className='relative max-w-full mx-auto z-10'/>
            <span className='absolute bottom-20 z-0 left-1/2 -translate-x-1/2 top-6 md:scale-125'>
              <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#14b8a6" d="M54.2,-22.6C58.7,-3.6,43.1,17.1,21.5,33.7C0,50.3,-27.4,62.9,-44.5,52.6C-61.5,42.2,-68.2,8.9,-59.1,-16.4C-49.9,-41.7,-25,-59,-0.1,-59C24.8,-59,49.6,-41.6,54.2,-22.6Z" transform="translate(100 100)"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
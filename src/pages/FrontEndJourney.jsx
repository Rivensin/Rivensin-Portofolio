import { Link } from "react-router-dom"
import InViewWrapper from "../component/InViewWrapper"
import { HashLink } from "react-router-hash-link"

export default function FrontEndJourney() {
  return (
    <section id="blog" className="pt-36 pb-32 px-4 container xl:container bg-slate-100 overflow-hidden">
      <InViewWrapper>
        <h4 className='font-semibold text-2xl xl:text-3xl text-primary mb-4 text-center'>
          Blog
        </h4>
        <h2 className='font-bold text-dark text-xl mb-12 sm:text-3xl xl:text-4xl text-center'>
          My Frontend Developer Learning Journey
        </h2>
      </InViewWrapper>
      <div className='relative xl:grid xl:grid-cols-[300px_1fr_300px] xl:min-h-screen'>
        <InViewWrapper>
          <aside className='xl:sticky xl:h-screen xl:left-0 xl:top-20 xl:bottom-0'> 
            <div className='font-medium text-secondary md:text-lg text-center mb-6 xl:mb-10 flex flex-col justify-center items-start gap-2 xl:gap-4'>
              <div className="font-bold border-b-2 border-slate-500 w-full hover:border-b-4 transition-all ease-in-out">
                Table of Contents
              </div>
              <HashLink smooth to='#frontenddev' className="text-black hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Kebutuhan Frontend Developer</HashLink>
              <HashLink smooth to='#htmlcss' className="text-black hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Belajar HTML & CSS</HashLink>
              <HashLink smooth to='#js' className="text-black hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Belajar Javascript</HashLink>
              <HashLink smooth to='#tailwind' className="text-black hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Belajar TailwindCSS</HashLink>
              <HashLink smooth to='#reactjs' className="text-black hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Belajar ReactJS</HashLink>
              <HashLink smooth to='#ts' className="text-black hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Belajar TypeScript</HashLink>
              <HashLink smooth to='#nextjs' className="text-black hover:underline hover:text-blue-500 duration-300 transition-all ease-in-out">Belajar NextJS</HashLink>
              <div className="block border-b-2 border-slate-500 w-full">
              </div>
            </div>
        </aside>
        </InViewWrapper>

        <div className='xl:px-8'> 
          <div className='font-medium text-secondary text-justify mb-10'>
            <InViewWrapper>
              <p id='frontenddev' className='font-bold text-2xl'>
                Kebutuhan untuk menjadi Frontend Developer
              </p>
              <p className='mt-4 leading-relaxed'>
                Saya akan membagikan sumber-sumber pembelajaraan saya dalam menjadi Frontend Developer. Seorang pengembang frontend membutuhkan kombinasi keterampilan teknis, logika berpikir, dan kepekaan terhadap desain dan bertanggung jawab membangun tampilan serta interaksi yang langsung dirasakan pengguna di sebuah aplikasi atau website. 
              </p>

              <p className='mt-4 leading-relaxed'>
                Diperlu untuk memahami dasar-dasar HTML, CSS, dan JavaScript, sebelum berlanjut ke framework modern seperti React, Angular, ataupun Vue. Penting juga untuk menguasai versi kontrol (Git & GitHub), memahami responsive design, serta memiliki pengetahuan dasar tentang API dan cara kerja browser.
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='htmlcss' className='font-bold text-2xl mt-8'>
                Belajar HTML & CSS
              </p>    
              <p className='mt-4 leading-relaxed'>
                HTML (HyperText Markup Language) dan CSS (Cascading Style Sheets) adalah dua fondasi utama dalam pembuatan halaman web. HTML berfungsi sebagai struktur dan kerangka dari sebuah halaman, di mana elemen seperti teks, gambar, tautan, dan tombol disusun agar dapat ditampilkan di browser. Sementara itu, CSS berperan untuk mengatur tampilan dan gaya visual dari elemen-elemen tersebut, seperti warna, ukuran, posisi, serta tata letaknya. Dengan kata lain, HTML menentukan apa yang muncul di halaman, sedangkan CSS mengatur bagaimana tampilan halaman itu terlihat menarik dan responsif di berbagai perangkat.
              </p>
              <p className='mt-1'>
                URL : <Link to='https://www.youtube.com/watch?v=G3e-cpL7ofc' target="_blank">HTML & CSS Full Course - Beginner to Pro by SuperSimpleDev</Link>
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='js' className='font-bold text-2xl mt-8'>
                Belajar Javascript
              </p>    
              <p className='mt-4 leading-relaxed'>
                JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif dan dinamis. Jika HTML berperan sebagai struktur dan CSS mengatur tampilan, maka JavaScript memberi “nyawa” pada sebuah website dengan menambahkan logika dan perilaku, seperti animasi, validasi formulir, perubahan konten secara real-time, hingga komunikasi dengan server melalui API. Bahasa ini berjalan langsung di browser pengguna dan menjadi inti dari pengembangan web modern
              </p>
              <p className='mt-1'>
                URL : <Link to='https://www.youtube.com/watch?v=EerdGm-ehJQ&t=40176s&pp=ygUQc3VwZXJzc2ltcGxlIGRldg%3D%3D' target="_blank">JavaScript Tutorial Full Course - Beginner to Pro by SuperSimpleDev</Link>
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='tailwind' className='font-bold text-2xl mt-8'>
                Belajar TailwindCSS
              </p>    
              <p className='mt-4 leading-relaxed'>
                Tailwind CSS adalah framework CSS berbasis utility-first yang memungkinkan pengembang membangun tampilan website dengan cepat menggunakan kelas-kelas siap pakai langsung di dalam HTML.Alih-alih menulis CSS kustom untuk setiap elemen Tailwind menyediakan kumpulan kelas kecil seperti flex, text-center, atau bg-blue-500 yang bisa digabungkan untuk menciptakan desain responsif dan konsisten.
              </p>
              <p className='mt-1'>
                URL : <Link to='https://www.youtube.com/watch?v=8Ea4oq8qFtM&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h' target="_blank">Belajar TAILWINDCSS by WPU</Link>
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='reactjs' className='font-bold text-2xl mt-8'>
                Belajar ReactJS
              </p>    
              <p className='mt-4 leading-relaxed'>
                React.js adalah library JavaScript yang dikembangkan oleh Facebook untuk membangun antarmuka pengguna (user interface) yang interaktif, cepat, dan dinamis. React menggunakan konsep komponen — potongan kode yang dapat digunakan kembali — sehingga pengembang bisa membuat aplikasi web yang terstruktur dan mudah dikelola. Dengan fitur seperti Virtual DOM
              </p>
              <p className='mt-1'>
                URL : <Link to='https://www.youtube.com/watch?v=Bvwq_S0n2pk&t=35092s' target="_blank">Full Stack React Developer Course with Appwrite by freeCodeCamp.org</Link>
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='ts' className='font-bold text-2xl mt-8'>
                Belajar TypeScript
              </p>    
              <p className='mt-4 leading-relaxed'>
                TypeScript adalah superset dari JavaScript yang menambahkan fitur static typing (pengetikan statis) untuk meningkatkan keandalan dan keterbacaan kode. Dengan TypeScript, pengembang dapat menentukan tipe data untuk variabel, parameter, dan fungsi, sehingga kesalahan dapat terdeteksi lebih awal sebelum aplikasi dijalankan.
              </p>
              <p className='mt-1'>
                URL : <Link to='https://www.youtube.com/watch?v=C_C64faSO4c' target="_blank">Tutorial TypeScript by Programmer Zaman Now</Link>
              </p>
            </InViewWrapper>

            <InViewWrapper>
              <p id='nextjs' className='font-bold text-2xl mt-8'>
                Belajar NextJS
              </p>    
              <p className='mt-4 leading-relaxed'>
                Next.js adalah framework React yang dirancang untuk mempermudah pengembangan aplikasi web modern dengan performa tinggi. Framework ini menyediakan fitur bawaan seperti Server-Side Rendering (SSR), Static Site Generation (SSG), dan API Routes, yang memungkinkan pengembang menggabungkan frontend dan backend dalam satu proyek. Next.js juga memiliki sistem App Router modern yang mendukung layout bersarang, data fetching fleksibel, serta optimasi otomatis seperti image optimization dan code splitting. Dengan integrasi mudah ke layanan seperti Vercel, Next.js menjadi salah satu pilihan utama untuk membangun aplikasi web cepat, SEO-friendly, dan mudah di-deploy.
              </p>
              <p className='mt-1'>
                URL : <Link to='https://www.youtube.com/watch?v=zw5wKyqDEUc&list=PLmF_zPV9ZcP2aYRuoEsMla5gqNjxP-V20' target="_blank">Tutorial Next JS by VIP CODE STUDIO</Link>
              </p>
            </InViewWrapper>
          </div>
        </div>      

        <InViewWrapper>
          <aside className='relative xl:sticky xl:h-screen xl:top-20 xl:left-0 xl:bottom-0'> 
            <div className='font-medium text-lg text-secondary md:text-lg text-center mb-10'>
              <div className="border-b-2 border-slate-500 w-full hover:border-b-4 transition-all ease-in-out">
                Artikel Lainnya : 
              </div>
              <p className='mt-4 leading-relaxed'>
                Coming Soon
              </p>
              </div>
          </aside>     
        </InViewWrapper>
      </div>
    </section>
  )
}


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className='font-bold text-8xl text-center my-10'>MARI BELAJAR <span className='bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'>TAILWIND CSS</span></h1>
        <div className='flex justify-center'>
          <span>Light</span>
          <input type='checkbox' id='toggle' className='hidden' />
          <label htmlFor='toggle'>
             <div className='w-9 h-5 bg-slate-400 rounded-full mx-2 flex items-center'>
              <div className='w-5 h-5 bg-white rounded-full items-center cursor-pointer toggle-circle'></div>
             </div>
          </label>
          <span>Dark</span>
        </div>
        <section className='mb-10 border-4 bg-indigo-200'>
          <h2 className='border-4 text-3xl text-center'>Spacing</h2>
          <div className='p-10 border-4 bg-wpu'>margin</div>
        </section>

        <section className='mb-10 border-4 bg-gradient-to-r from-indigo-200 via-teal-200 to-yellow-300'>
          <h2 className='border-4 text-3xl text-center'>Sizing</h2>
          <div className='w-16 h-16 border-4'>kotak 1</div>
          <div className='max-w-xs border-4'>kotak 2</div>
        </section>  

        <section className='mb-10 font-inter max-w-3xl mx-auto'>
          <h2 className='mb-4 text-4xl font-bold'>belajar typography</h2>
          <div className='mb-4 text-gray-500'>by <a className='font-semibold underline text-blue-600'>rivensin</a>, 25 feb 25</div>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet <a href='#'className='underline bold'>consectetur</a>, adipisicing elit. Corporis non atque recusandae asperiores laborum impedit necessitatibus magni cum quis, veniam illum voluptatum dolores sequi quos magnam. Commodi, rerum totam ea officia nam assumenda quis repellendus! Esse, illum minus quam velit accusantium aliquid voluptates dolores quasi a. Dignissimos rerum maxime tempora?
          </p>
          <blockquote className='mb-4 italic font-thin text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium dignissimos perferendis totam? Qui expedita quo repudiandae veniam, assumenda itaque beatae commodi voluptatibus, enim eos fugiat porro iure. Saepe, praesentium!</blockquote>
          <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nulla, distinctio hic mollitia ratione voluptas perferendis harum fugit iste officia.</p>
        </section>
        
        <div className='max-w-xl h-96 bg-slate-300 mx-auto mt-[42px] overflow-y-scroll bg-scroll' 
            style={{ backgroundImage : "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiTPdsBP7U46q5nHVPHEcoKXhRO5pogQJLt9T6zqRgAT5I17N21Qt_FWcf2a2-i4Pbt2yYy0YSojmKyl0vfUF7Wo-q8LROwguMVD6iuEH4LfCpc4nZWpivpBxXa7DMqSOEHNSyz3yuGNZ-/s1600/schoepfia.jpg')"}}
        >
          <p className='p-5 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus adipisci aliquid eos rerum eius illum, saepe rem nam distinctio quia perferendis suscipit aspernatur provident minus, repudiandae, sunt doloremque velit obcaecati neque earum odio! Vero voluptatem excepturi corporis repellendus labore nam architecto molestiae aut dicta. Consequatur, commodi. Sit veniam, optio tenetur nihil animi possimus, placeat dolores voluptate incidunt ipsa nesciunt corporis iure officia reiciendis velit consequuntur quod suscipit ex rerum. Ducimus, esse veniam, officia at beatae culpa magni aliquid nesciunt corporis, voluptates voluptas rem harum numquam. Quae, quisquam! Eligendi error facilis eos repellendus obcaecati. Animi voluptates accusantium, excepturi aut voluptas omnis incidunt molestias illo assumenda fugiat, architecto repellat quis corporis dolore? Beatae, ea. Nam, est aspernatur repellat consequuntur vitae placeat officia eum deserunt facilis illo suscipit ullam ducimus atque a velit in, quos vero rem, libero quae. Officia consectetur quas dolore veniam facilis, a voluptatum distinctio molestiae incidunt temporibus sequi explicabo impedit quia adipisci excepturi amet consequatur ducimus ipsam ipsum debitis cum nihil dolor cupiditate? Hic, amet blanditiis ducimus cum autem id veniam deserunt dolore modi incidunt, in quae illo dolor. Reprehenderit nam nihil eius sint quos, tempora officia modi ea delectus quasi autem beatae quibusdam neque placeat repellat? Natus!</p>
        </div>

        <div className='container px-3 py-8 max-w-lg mx-auto mt-32 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl shadow-lg rounded-2xl overflow-hidden'>  
          <img src='img/laptop.jpg' alt='tailwind'></img>
          <h2 className='text-slate-700 text-md sm:text-lg md:text-xl lg:text-2xl font-semibold mt-4'>MARI BELAJAR TAILWIND BERSAMA</h2>
          <p className='text-slate-500 text-sm sm:text-md md:text-lg lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum in porro. Excepturi quisquam at id? Dolor porro aliquid enim sequi praesentium sint odit adipisci perferendis! Soluta rem asperiores provident?</p> 
          <div className='mt-5'>  
            <span className='bg-red-700 px-3 py-3 rounded-xl text-white sm:text-md md:text-lg lg:text-xl cursor-pointer'>Subscribe Channel Youtube</span>
          </div>
        </div>

        <div className='container flex px-3 py-3 mb-2 max-w-lg mx-auto mt-32 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl shadow-lg'>  
          <div className='flex-1'>
            <h2 className='text-slate-700 text-md sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2'>MARI BELAJAR TAILWIND BERSAMA</h2>
            <p className='text-slate-500 text-sm sm:text-md md:text-lg lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum in porro. Excepturi quisquam at id? Dolor porro aliquid enim sequi praesentium sint odit adipisci perferendis! Soluta rem asperiores provident?</p> 
            <div className='mt-5'>      
              <span className='bg-red-700 px-1 py-2 rounded-xl text-white text-sm sm:text-md md:text-lg lg:text-xl cursor-pointer'>
                Subscribe Channel Youtube
              </span>
            </div>
          </div>
          <div className='bg-red-100 flex bg-cover flex-1'>
            <img src='img/laptop.jpg' alt='tailwind' className='rounded-xl'></img>
          </div>
        </div>
        
        <div className='columns-3 mt-4 flex mx-auto overflow-x-scroll'>
          <img src='img/laptop.jpg' alt='tailwind' className='rounded-xl'></img>
          <img src='img/laptop.jpg' alt='tailwind' className='rounded-xl'></img>
          <img src='img/laptop.jpg' alt='tailwind' className='rounded-xl'></img>      
        </div>

        <div className='mt-4 flex mx-auto flex-wrap justify-center'>
          <img src='img/laptop.jpg' alt='tailwind' className='w-40 rounded-xl'></img>
          <img src='img/laptop.jpg' alt='tailwind' className='w-40 rounded-xl'></img>
          <img src='img/laptop.jpg' alt='tailwind' className='w-40 rounded-xl'></img>      
        </div>

        <div className="mt-64 p-2 font-inter grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4">
          <h2 className='text-xl h-15 font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex'>
            <span className='self-center'>welcome to WPU</span>
          </h2>
          <div className='h-15 text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 md:flex'>
            <span className='self-end'>@Riven</span>
            </div>
          <div className='grid-card group'>
            <div className="bg-[url('img/channels3_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group md:col-start-3'>
            <div className="bg-[url('img/channels4_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group'>
            <div className="bg-[url('img/channels5_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group'>
            <div className="bg-[url('img/channels6_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group'>
            <div className="bg-[url('img/channels7_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group md:col-start-2'>
            <div className="bg-[url('img/channels8_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group md:col-start-4'>
            <div className="bg-[url('img/channels9_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group'>
            <div className="bg-[url('img/channels10_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group md:col-start-3'>
            <div className="bg-[url('img/channels11_profile.jpg')] grid-card-image">
            </div>
          </div>
          <div className='grid-card group md:col-start-3'>
            <div className="bg-[url('img/unnamed.jpg')] grid-card-image">
            </div>
          </div>
        </div>



        <div className='mb-96'></div>
      </div>
    </>  
  )
}


export default App


import React from 'react'

function Clients() {
  return (
    <section id='clients' className="pt-36 pb-32 container bg-slate-800"> 
      <div className="w-full px-4">
        <div className="mx-auto text-center mb-16">
          <h4 className='main-title'>
            Clients
          </h4>
          <h2 className='sub-title text-white'>
            Yang Pernah Bekerjasama
          </h2>
          <p className='detail-title text-white'>
            Beberapa klien yang telah bekerja sama dengan saya dalam berbagai proyek. 🤝✨
          </p>
        </div>
      </div>
      <div className='w-full px-4 flex flex-wrap justify-center items-center'>
        <div className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8 rounded-full overflow-hidden'>
          <img src="img/clients/dlooti.svg" alt="dlooti" className='w-[125px] h-[68.75px] object-contain'/>
        </div>
        <div className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
          <img src="img/clients/xiaomi.svg" alt="xiaomi" className='w-[125px] h-[68.75px] object-contain'/>
        </div>
        <div className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
          <img src="img/clients/bumn.svg" alt="bumn" className='w-[125px] h-[68.75px] object-contain'/>
        </div>
        <div className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
          <img src="img/clients/gojek.svg" alt="gojek" className='w-[125px] h-[68.75px] object-contain'/>
        </div>
        <div className='mx-4 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500 lg:mx-6 xl:mx-8'>
          <img src="img/clients/telkom.svg" alt="telkom" className='w-[125px] h-[68.75px] object-contain'/>
        </div>
      </div>
    </section>
  )
}

export default Clients
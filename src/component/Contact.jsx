import React from 'react'

function Contact() {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className='font-semibold text-lg text-primary mb-2'>
                Contact
              </h4>
              <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
                Hubungi Kami
              </h2>
              <p className='font-medium text-md text-secondary md:text-lg'>
                Ingin berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi kami! 📩
              </p>
            </div>
        </div>
        <form action="">
          <div className='w-full lg:w-2/3 lg:mx-auto'>
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className='text-base text-primary font-bold '>
                Nama
              </label>
              <input type="text" id='name' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className='text-base text-primary font-bold'>
                Email
              </label>
              <input type="text" id='email' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="pesan" className='text-base text-primary font-bold'>
                Pesan
              </label>
              <textarea type="text" id='pesan' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32'/>
            </div>
            <div className="w-full px-4 mb-8">
              <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 shadow-lg transition duration-500'>
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
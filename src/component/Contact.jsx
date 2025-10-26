function Contact() {
  return (
    <section id="contact" className="container pt-36 pb-32">
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className='main-title'>
            Contact
          </h4>
          <h2 className='sub-title'>
            Hubungi Kami
          </h2>
          <p className='text-md detail-title'>
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
            <input type="text" id='name' className='contact-input' />
          </div>
          <div className="w-full px-4 mb-8">
            <label htmlFor="email" className='text-base text-primary font-bold'>
              Email
            </label>
            <input type="text" id='email' className='contact-input' />
          </div>
          <div className="w-full px-4 mb-8">
            <label htmlFor="pesan" className='text-base text-primary font-bold'>
              Pesan
            </label>
            <textarea type="text" id='pesan' className='contact-input h-32'/>
          </div>
          <div className="w-full px-4 mb-8">
            <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 shadow-lg transition duration-500'>
              Kirim
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact
import { Link } from "react-router-dom"
import { portofolio } from "../const/portofolio"

function Portofolio() {
  return (
    <section id='portofolio' className='pt-36 pb-16 container bg-slate-100 overflow-hidden'>
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className='main-title'>
            Portofolio
          </h4>
          <h2 className='sub-title text-dark'>
            Project Terbaru
          </h2>
          <p className='text-md detail-title'>
          Lihat proyek terbaru saya dalam dunia programming dan web development! 🚀💻
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {portofolio.map(porto => (
            <div className="portofolio-card">
              <Link to={porto.link} target='_blank'>
                <div className="portofolio-img-wrap">
                  <img src={porto.img} alt={porto.title} className='portofolio-img'/>
                </div>
                <h3 className='portofolio-title'>
                  {porto.title} <span className='portofolio-title-date'>{porto.date}</span>
                </h3>
                <p className='portofolio-detail'>
                  {porto.desc}
                </p>
              </Link>
            </div>
          ))}                         
        </div>
      </div>
    </section>
  )
}

export default Portofolio
import Header from './component/Header';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';
import UseScrollTop from './component/UseScrollTop';

function App() {
  return (
    <>   
    <Header />
    <UseScrollTop />
    <Outlet />
    <Footer />
    </>
  )
  
}

export default App
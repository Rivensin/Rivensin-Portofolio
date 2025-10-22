import Hero from '../component/Hero';
import About from '../component/About';
import Portofolio from '../component/Portofolio'
import Clients from '../component/Clients';
import Blog from '../component/Blog';
import Contact from '../component/Contact';
import InViewWrapper from '../component/InViewWrapper';

export default function Home() {
  return (
    <>   
    <InViewWrapper><Hero /></InViewWrapper> 
    <InViewWrapper><About /></InViewWrapper>
    <InViewWrapper><Portofolio /></InViewWrapper>
    <InViewWrapper><Clients /></InViewWrapper>
    <InViewWrapper><Blog /></InViewWrapper>
    <InViewWrapper><Contact /></InViewWrapper>
    </>
  )
}
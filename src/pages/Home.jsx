import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';


function Home() {
  return (
    <div className='items-center text-center justify-center h-[100%]'>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default Home
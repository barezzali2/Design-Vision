import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesPage from '../components/services/ServicesPage'

function Services() {
  return (
    <div className='items-center text-center justify-center h-[100%]'>
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  )
}

export default Services
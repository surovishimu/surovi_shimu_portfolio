
import './App.css'
import About from './Component/About'
import Banner from './Component/Banner'
import ContactForm from './Component/ContactForm'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Projects2 from './Component/Project2'
import Projects4 from './Component/Project4'
import Projects from './Component/Projects'
import Projects1 from './Component/Projects1'
import Services from './Component/Services'

function App() {


  return (
    <div className='font-salsa'>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Projects1></Projects1>
      <Projects2></Projects2>
      <Projects4></Projects4>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default App

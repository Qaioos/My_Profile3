import './App.css'
import Running from './Components/Runnung/Running'

import Footer from './feat/Footer/Footer'
import AboutIdentity from './feat/Landing/components/About_Identty/AboutIdentity'
/* import Contact from './feat/Landing/components/Contact/Contact' */
import Expedition from './feat/Landing/components/Expedition/Expedition'
import Projects from './feat/Landing/components/FeatureWork/Projects'
import Hero from './feat/Landing/components/Hero/Hero'
import InterActivTech from './feat/Landing/components/InterActivTech/InterActivTech'
import Header from './Layout/Headers/Header'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Running/>
    <AboutIdentity/>
    <InterActivTech/>
    <Projects/>
    <Expedition/> 
    {/* <Contact/> */}
    <Footer/>
    </>
  )
}

export default App

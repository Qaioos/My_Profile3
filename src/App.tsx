import './App.css'
import Running from './Components/Runnung/Running'

import Footer from './feat/Footer/Footer'
import AboutIdentity from './feat/Landing/components/About_Identty/AboutIdentity'
import Expedition from './feat/Landing/components/Expedition/Expedition'
import Projects from './feat/Landing/components/FeatureWork/Projects'
import Hero from './feat/Landing/components/Hero/Hero'
import Header from './Layout/Headers/Header'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Running/>
    <Projects/>
    <AboutIdentity/>
    <Expedition/> 
    <Footer/>
    </>
  )
}

export default App

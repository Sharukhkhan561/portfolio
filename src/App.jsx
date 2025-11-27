
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Project from './sections/Project'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor  from './components/CustomCursor'
function App() {

  return (
    <div className="relative gradient text-white">
    <CustomCursor/>
    {/* <ParticlesBackground/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Footer/> 
    </div>
  )
}

export default App

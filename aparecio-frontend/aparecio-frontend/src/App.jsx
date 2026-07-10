import ContenedorSeguridad from './components/Contenedor-seguridad'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import ZonaApp from './components/ZonaApp'
import TramiteCi from './components/TramiteCi'

function App() {
  return (
    <>
  <Nav/>
  <Hero/>
  <ContenedorSeguridad/>
  <ZonaApp/>
  <TramiteCi/>
  <Footer/>
    </>
  )
}

export default App

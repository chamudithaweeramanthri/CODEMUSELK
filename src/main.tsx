import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {HashRouter} from 'react-router-dom'
import './index.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Contactus from './ContactUs'
import Footer from './Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <Contactus />
      <Footer />
    </HashRouter>
  </StrictMode>,
)

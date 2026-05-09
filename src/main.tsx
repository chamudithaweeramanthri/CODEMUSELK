import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Contactus from './ContactUs'
import Footer from './Footer'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <Contactus />
      <Footer />
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)

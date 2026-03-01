import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Services from './Services'
import Team from './Team'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Hero />
      <Services />
      <Team />
    </BrowserRouter>
  </StrictMode>,
)

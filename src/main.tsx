import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Services from './Services'
import Team from './Team'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <Services />
    <Team />
  </StrictMode>,
)

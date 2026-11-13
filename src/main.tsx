import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './index.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Contactus from './ContactUs'
import Footer from './Footer'
import TrustedBy from './TrustedBy'
import Reviews from './Reviews'
import { Analytics } from "@vercel/analytics/react"

function ScrollToLocation() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    document.title = `${pathname === '/demos' ? 'Demo Corner' : pathname === '/reviews' ? 'Reviews' : 'Digital Solutions'} | CODEMUSELK`
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <ScrollToLocation />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><Services /><TrustedBy /><Contactus /></>} />
          <Route path="/demos" element={<div className="bg-[#1f0130] pt-20"><Projects /></div>} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)

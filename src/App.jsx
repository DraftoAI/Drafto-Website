import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import LandingPage from './components/LandingPage'
import DatenschutzPage from './components/DatenschutzPage'

function ScrollToSection() {
  const location = useLocation()
  
  useEffect(() => {
    // Wait for the page to load, then scroll to the appropriate section
    const timer = setTimeout(() => {
      const path = location.pathname
      if (path === '/how-it-works') {
        const element = document.getElementById('how-it-works')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (path === '/features') {
        const element = document.getElementById('features')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (path === '/faq') {
        const element = document.getElementById('faq')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (path === '/datenschutz') {
        // Scroll to top of datenschutz page
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [location.pathname])
  
  return null
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-n0">
        <ScrollToSection />
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <LandingPage />
            </>
          } />
          <Route path="/how-it-works" element={
            <>
              <Navigation />
              <LandingPage />
            </>
          } />
          <Route path="/features" element={
            <>
              <Navigation />
              <LandingPage />
            </>
          } />
          <Route path="/faq" element={
            <>
              <Navigation />
              <LandingPage />
            </>
          } />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  )
}

export default App

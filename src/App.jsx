import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import LandingPage from './components/LandingPage'
import DatenschutzPage from './components/DatenschutzPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-n0">
        <Routes>
          <Route path="/" element={
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

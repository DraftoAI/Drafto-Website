import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className="min-h-screen bg-neutral-n0">
      <Navigation />
      <LandingPage />
      <Analytics />
    </div>
  )
}

export default App

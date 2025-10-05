import React, { useEffect, useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasRequested, setHasRequested] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    const onHash = () => {
      if (location.hash === '#demo-request' && !hasRequested) {
        setIsOpen(true)
      }
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', onHash)
    const stored = localStorage.getItem('drafto_has_requested_demo')
    if (stored === 'true') setHasRequested(true)
    // open on initial load if hash present
    onHash()
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('hashchange', onHash)
    }
  }, [hasRequested])

  const openModal = () => {
    if (hasRequested) return
    if (location.hash !== '#demo-request') {
      history.replaceState(null, '', '#demo-request')
    }
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    if (location.hash === '#demo-request') {
      history.replaceState(null, '', ' ')
    }
  }

  const handleSubmitted = async (formData) => {
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'xyznpjda'
    const payload = {
      ...formData,
      _subject: 'Neue Demo-Anfrage (Drafto)'
    }

    try {
      if (formspreeId) {
        const resp = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        })
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      } else {
        console.warn('VITE_FORMSPREE_ID not set. Logging form instead:', payload)
        console.log('Demo request (no email configured):', payload)
      }

      setHasRequested(true)
      localStorage.setItem('drafto_has_requested_demo', 'true')
      closeModal()
      // notify other components (e.g., Hero) to update CTA state immediately
      window.dispatchEvent(new Event('drafto_demo_requested'))
      alert('Danke! Wir haben deine Anfrage erhalten.')
    } catch (err) {
      console.error('Fehler beim Senden der Anfrage', err)
      alert('Senden fehlgeschlagen. Bitte später erneut versuchen.')
    }
  }

  return (
    <nav className="bg-neutral-n0 border-b border-neutral-n200 sticky top-0 z-50">
      {/* Top blue line */}
      <div className="h-1 bg-gradient-to-r from-primary-pr500 to-primary-pr600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-dm-sans font-bold text-2xl text-neutral-n1000">
              Drafto
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#how-it-works" 
                className="text-neutral-n700 hover:text-neutral-n1000 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Unsere Lösung
              </a>
              <a 
                href="#features" 
                className="text-neutral-n700 hover:text-neutral-n1000 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Funktionalitäten
              </a>
              <a 
                href="#faq" 
                className="text-neutral-n700 hover:text-neutral-n1000 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                FAQ
              </a>
            </div>
          </div>
          
          {/* CTA Button (one-time) */}
          <div className="flex-shrink-0">
            <button
              onClick={openModal}
              disabled={hasRequested}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${hasRequested ? 'bg-neutral-n200 text-neutral-n700 cursor-not-allowed border border-neutral-n300' : 'bg-gradient-to-br from-primary-pr500 to-primary-pr600 text-neutral-n0 hover:from-primary-pr600 hover:to-primary-pr600 focus:ring-primary-pr500'}`}
            >
              {hasRequested ? 'Anfrage gesendet' : 'Demo anfragen'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-neutral-n700 hover:text-neutral-n1000 focus:outline-none focus:ring-2 focus:ring-primary-pr500 focus:ring-offset-2 p-2 rounded-md">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeModal}
          />
          <div className="relative bg-neutral-n0 rounded-2xl shadow-xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-n200">
              <h2 className="font-dm-sans font-bold text-[20px] text-neutral-n1000">Demo anfragen</h2>
              <button
                onClick={closeModal}
                className="text-neutral-n700 hover:text-neutral-n1000 focus:outline-none"
                aria-label="Modal schließen"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <form
              className="px-6 pt-4 pb-6 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                const form = new FormData(e.currentTarget)
                handleSubmitted(Object.fromEntries(form.entries()))
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName" className="text-sm text-neutral-n800">Vorname</label>
                  <input id="firstName" name="firstName" type="text" required className="border border-neutral-n300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-pr500" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName" className="text-sm text-neutral-n800">Nachname</label>
                  <input id="lastName" name="lastName" type="text" required className="border border-neutral-n300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-pr500" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-neutral-n800">E-Mail</label>
                <input id="email" name="email" type="email" required className="border border-neutral-n300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-pr500" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="company" className="text-sm text-neutral-n800">Unternehmen</label>
                <input id="company" name="company" type="text" className="border border-neutral-n300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-pr500" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm text-neutral-n800">Nachricht</label>
                <textarea id="message" name="message" rows={4} className="border border-neutral-n300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-pr500" />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg border border-neutral-n300 text-neutral-n800 hover:bg-neutral-n200/40">
                  Abbrechen
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-primary-pr600 text-white hover:bg-primary-pr500">
                  Absenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

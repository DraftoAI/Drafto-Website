import React from 'react'

const SeoContentSection = () => {
  return (
    <div className="bg-neutral-n0 box-border flex flex-col items-center px-[var(--inset-3xl,32px)] md:px-[var(--inset-xl,20px)] sm:px-[var(--inset-lg,16px)] pt-[var(--section-spacing-md,48px)] pb-[var(--section-spacing-md,48px)] w-full max-w-[1440px]">
      <div className="w-full max-w-[900px] flex flex-col gap-4">
        <h2 className="font-dm-sans font-bold text-neutral-n1000 text-[28px] md:text-[32px]">
          Automatisierte Dokumentenerstellung für Kanzleien
        </h2>
        <p className="font-inter text-neutral-n800 opacity-90 leading-[1.7]">
          Drafto beschleunigt die <strong>Vertragsautomatisierung</strong> mit intelligenten Vorlagen und <strong>Platzhaltern</strong>.
          Unser <strong>KI‑gestützter Editor</strong> erstellt Entwürfe, prüft Formulierungen und sorgt für konsistente Dokumente –
          direkt im Browser und ohne Medienbrüche.
        </p>
        <p className="font-inter text-neutral-n800 opacity-90 leading-[1.7]">
          Dank <strong>API</strong> und <strong>Webhooks</strong> lässt sich Drafto nahtlos in bestehende Kanzlei‑Software integrieren.
          Sicherheit steht im Fokus: Betrieb auf <strong>Microsoft Azure</strong>, DSGVO‑konform mit EU Data Boundary. Sieh dir unseren
          <a href="#how-it-works" className="text-primary-pr600 font-medium hover:underline"> Prozess in vier Schritten</a> an oder
          entdecke die <a href="#features" className="text-primary-pr600 font-medium hover:underline">wichtigsten Funktionalitäten</a>.
        </p>
      </div>
    </div>
  )
}

export default SeoContentSection



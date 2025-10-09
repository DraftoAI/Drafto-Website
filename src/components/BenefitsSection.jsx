import React from 'react'

const BenefitsSection = () => {
  return (
    <div
      id="benefits"
      className="bg-gradient-to-br from-primary-pr50 to-primary-pr100 flex flex-col items-center w-full max-w-[1440px] px-6 md:px-10 lg:px-12 py-20 md:py-24 lg:py-28 gap-16"
    >
      {/* Header */}
      <div className="text-center max-w-[620px]">
        <h2 className="font-dm-sans font-bold text-[32px] md:text-[36px] lg:text-[40px] text-neutral-n1000 mb-4">
          Ihre Vorteile mit Drafto
        </h2>
        <p className="text-neutral-n800 opacity-80 text-[16px] md:text-[17px]">
          Konkrete Zahlen zeigen, wie Drafto Ihre Dokumente effizienter macht
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        
        {/* Zeitersparnis */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-n200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-center">
            <div className="bg-primary-pr500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-dm-sans font-bold text-[24px] text-neutral-n1000 mb-4">
              Zeitersparnis
            </h3>
            <div className="mb-4">
              <div className="text-[48px] font-bold text-primary-pr600 mb-2">89%</div>
              <div className="text-neutral-n800 text-[16px]">
                Weniger Zeit für Dokumentenerstellung
              </div>
            </div>
            <div className="text-neutral-n700 text-[14px] leading-relaxed">
              <div className="mb-2">
                <span className="font-semibold">Vorher:</span> 45 Minuten pro Vertrag
              </div>
              <div>
                <span className="font-semibold">Mit Drafto:</span> 5 Minuten pro Vertrag
              </div>
            </div>
          </div>
        </div>

        {/* Fehlerreduktion */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-n200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-center">
            <div className="bg-primary-pr500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-dm-sans font-bold text-[24px] text-neutral-n1000 mb-4">
              Fehlerreduktion
            </h3>
            <div className="mb-4">
              <div className="text-[48px] font-bold text-primary-pr600 mb-2">95%</div>
              <div className="text-neutral-n800 text-[16px]">
                Weniger Tippfehler in Dokumenten
              </div>
            </div>
            <div className="text-neutral-n700 text-[14px] leading-relaxed">
              <div className="mb-2">
                <span className="font-semibold">Automatische:</span> Platzhalter-Befüllung und Rechtschreibprüfung
              </div>
            </div>
          </div>
        </div>

        {/* Produktivität */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-n200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
          <div className="text-center">
            <div className="bg-primary-pr500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-dm-sans font-bold text-[24px] text-neutral-n1000 mb-4">
              Produktivität
            </h3>
            <div className="mb-4">
              <div className="text-[48px] font-bold text-primary-pr600 mb-2">8x</div>
              <div className="text-neutral-n800 text-[16px]">
                Mehr Dokumente pro Stunde
              </div>
            </div>
            <div className="text-neutral-n700 text-[14px] leading-relaxed">
              <div className="mb-2">
                <span className="font-semibold">Vorher:</span> 1,3 Dokumente/Stunde
              </div>
              <div>
                <span className="font-semibold">Mit Drafto:</span> 12 Dokumente/Stunde
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BenefitsSection

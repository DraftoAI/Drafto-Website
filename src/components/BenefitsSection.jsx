import React from 'react'

const BenefitsSection = () => {
  return (
    <div
      id="benefits"
      className="bg-gradient-to-br from-primary-pr50 to-primary-pr100 flex flex-col items-center w-full max-w-[1440px] px-6 md:px-10 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-14 lg:pb-16 gap-10"
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

      {/* Benefits Grid + Hinweis */}
      <div className="flex flex-col gap-3 w-full max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        
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
              <div className="text-[48px] font-bold text-primary-pr600 mb-2">87%</div>
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
            <h3 className="font-dm-sans font-bold text-[24px] text-neutral-n1000 mb-4">Weniger Eingaben</h3>
            <div className="mb-4">
              <div className="text-[48px] font-bold text-primary-pr600 mb-2">78%</div>
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
              Tippfehler im Prozess
            </h3>
            <div className="mb-4">
              <div className="text-[48px] font-bold text-primary-pr600 mb-2">0</div>
            </div>
          </div>
        </div>

      </div>

      <p className="text-left text-neutral-n600 text-[14px] italic max-w-[1200px] w-full">
        * Basiert auf einer Messung mit 10 Probanden, in der ein Onboarding eines neuen Kunden simuliert wurde.
      </p>
      </div>
    </div>
  )
}

export default BenefitsSection

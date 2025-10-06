import React, { useEffect, useState } from 'react'
import LaptopIllustration from '../assets/Laptopview.png'
import AISpark from '../assets/AI.svg'

const HeroSection = () => {
  const [hasRequested, setHasRequested] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('drafto_has_requested_demo')
    setHasRequested(stored === 'true')
    const onCustom = () => setHasRequested(true)
    window.addEventListener('drafto_demo_requested', onCustom)
    return () => window.removeEventListener('drafto_demo_requested', onCustom)
  }, [])
  return (
    <div id="hero" className="bg-neutral-n0 box-border content-stretch flex flex-col gap-[var(--section-spacing-xl,80px)] lg:gap-[var(--section-spacing-xl,80px)] md:gap-[var(--section-spacing-lg,60px)] sm:gap-[var(--section-spacing-md,48px)] items-center overflow-clip pb-[var(--section-spacing-xl,80px)] lg:pb-[var(--section-spacing-xl,80px)] md:pb-[var(--section-spacing-lg,60px)] sm:pb-[var(--section-spacing-md,48px)] pt-[var(--section-spacing-xl,80px)] lg:pt-[var(--section-spacing-xl,80px)] md:pt-[var(--section-spacing-lg,60px)] sm:pt-[var(--section-spacing-md,48px)] px-[var(--inset-3xl,32px)] lg:px-[var(--inset-3xl,32px)] md:px-[var(--inset-xl,20px)] sm:px-[var(--inset-lg,16px)] relative shrink-0 w-full max-w-[1440px]">
      <div className="content-start grid grid-cols-1 lg:grid-cols-2 gap-[var(--section-spacing-md,48px)] lg:gap-[var(--section-spacing-md,48px)] md:gap-[var(--section-spacing-lg,60px)] sm:gap-[var(--section-spacing-sm,32px)] items-start max-w-[1204px] relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-2xl,24px)] lg:gap-[var(--stack-2xl,24px)] md:gap-[var(--stack-xl,20px)] sm:gap-[var(--stack-lg,16px)] items-start justify-end max-w-[476px] min-h-px w-full min-w-0 pl-0 pr-[40px] lg:pr-[40px] md:pr-[20px] sm:pr-0 py-0 relative shrink-0">
          <div className="content-stretch flex flex-col gap-[var(--stack-lg,16px)] lg:gap-[var(--stack-lg,16px)] md:gap-[var(--stack-md,12px)] sm:gap-[var(--stack-sm,8px)] items-start relative shrink-0 w-full">
            <div className="bg-neutral-n0 border border-neutral-n300 border-solid box-border content-stretch flex gap-[var(--stack-sm,8px)] items-center px-[var(--stack-md,12px)] lg:px-[var(--stack-md,12px)] md:px-[var(--stack-sm,8px)] sm:px-[var(--stack-xs,4px)] py-[var(--inset-sm,8px)] lg:py-[var(--inset-sm,8px)] md:py-[var(--inset-xs,4px)] sm:py-[var(--inset-xs,4px)] relative rounded-[var(--border-radius-2xl,20px)] lg:rounded-[var(--border-radius-2xl,20px)] md:rounded-[var(--border-radius-lg,12px)] sm:rounded-[var(--border-radius-md,8px)] shrink-0 shadow-sm">
              <img src={AISpark} alt="AI" className="relative shrink-0 h-5 w-5 md:h-4 md:w-4 sm:h-4 sm:w-4" />
              <p className="font-inter font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-neutral-n800 text-center">
                Vertrag in Minuten
              </p>
            </div>
            <div className="content-stretch flex gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
              <h1 className="flex-[1_0_0] font-dm-sans font-bold leading-[1.16] min-h-px min-w-px break-words hyphens-auto relative shrink-0 text-[39px] lg:text-[39px] md:text-[32px] sm:text-[26px] text-neutral-n1000 whitespace-pre-wrap">
                Automatisierte Dokumenten<wbr/>erstellung
              </h1>
            </div>
            <div className="box-border content-stretch flex gap-[var(--stack-sm,8px)] items-center pl-0 pr-[24px] lg:pr-[24px] md:pr-[16px] sm:pr-0 py-0 relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 whitespace-pre-wrap">
                Drafto automatisiert die Erstellung standardisierter Dokumente mit Vorlagen, Platzhaltern und Datenbank‑Mapping. Im Unterschied zu klassischen Textbaustein‑Tools kombiniert Drafto einen kollaborativen Editor, KI‑gestützte Entwürfe und einen Versionsverlauf.
              </p>
            </div>
          </div>
          {/* Single CTA button that opens modal via #demo-request */}
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            {hasRequested ? (
              <button disabled className="box-border flex items-center px-[var(--inline-xl,20px)] py-[var(--inset-sm,8px)] rounded-[var(--border-radius-lg,12px)] text-white font-dm-sans text-[16px] bg-neutral-n300 text-neutral-n700 cursor-not-allowed">
                Anfrage gesendet
              </button>
            ) : (
              <a href="#demo-request" className="bg-gradient-to-br from-primary-pr500 to-primary-pr600 hover:from-primary-pr600 hover:to-primary-pr600 transition-colors box-border flex items-center px-[var(--inline-xl,20px)] py-[var(--inset-sm,8px)] rounded-[var(--border-radius-lg,12px)] text-white font-dm-sans text-[16px]">
                Demo anfragen
              </a>
            )}
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-sm,8px)] items-center min-h-px w-full min-w-0 relative shrink-0">
          <div className="h-[320px] lg:h-[340px] md:h-[260px] sm:h-[220px] relative shrink-0 w-full max-w-[520px] lg:max-w-[540px] md:max-w-[440px] sm:max-w-[360px] rounded-[var(--border-radius-xl,16px)] lg:rounded-[var(--border-radius-xl,16px)] md:rounded-[var(--border-radius-lg,12px)] sm:rounded-[var(--border-radius-md,8px)] flex items-center justify-center overflow-hidden bg-transparent">
            <img src={LaptopIllustration} alt="Apple MacBook Pro 13" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

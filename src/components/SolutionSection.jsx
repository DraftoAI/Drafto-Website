import React from 'react'
import SchrittEins from '../assets/Schritt 1.png'
import SchrittZwei from '../assets/Schritt 2.png'
import SchrittDrei from '../assets/Schritt 3.png'
import SchrittVier from '../assets/Schritt 4.png'

const SolutionSection = () => {
  return (
    <div id="how-it-works" className="bg-neutral-n0 box-border content-stretch flex flex-col gap-[var(--section-spacing-md,48px)] lg:gap-[var(--section-spacing-md,48px)] md:gap-[var(--section-spacing-sm,32px)] sm:gap-[var(--section-spacing-xs,24px)] items-center overflow-clip pb-[var(--section-spacing-xl,80px)] lg:pb-[var(--section-spacing-xl,80px)] md:pb-[var(--section-spacing-lg,60px)] sm:pb-[var(--section-spacing-md,48px)] pt-[var(--section-spacing-xl,80px)] lg:pt-[var(--section-spacing-xl,80px)] md:pt-[var(--section-spacing-lg,60px)] sm:pt-[var(--section-spacing-md,48px)] px-[var(--inset-3xl,32px)] lg:px-[var(--inset-3xl,32px)] md:px-[var(--inset-xl,20px)] sm:px-[var(--inset-lg,16px)] relative shrink-0 w-full max-w-[1440px] scroll-mt-[96px] md:scroll-mt-[112px]">
      {/* Header Section */}
      <div className="content-stretch flex flex-col gap-[var(--stack-lg,16px)] lg:gap-[var(--stack-lg,16px)] md:gap-[var(--stack-md,12px)] sm:gap-[var(--stack-sm,8px)] items-center max-w-[612px] lg:max-w-[612px] md:max-w-[500px] sm:max-w-[400px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-dm-sans font-bold leading-[1.16] lg:leading-[1.16] md:leading-[1.2] sm:leading-[1.3] min-h-px min-w-px relative shrink-0 text-[39px] lg:text-[39px] md:text-[32px] sm:text-[28px] text-neutral-n1000 text-center whitespace-pre-wrap">
            Unsere Lösung
          </p>
        </div>
        <div className="box-border content-stretch flex gap-[var(--stack-sm,8px)] items-center max-w-[820px] lg:max-w-[820px] md:max-w-[600px] sm:max-w-[400px] px-[var(--inset-xl,20px)] lg:px-[var(--inset-xl,20px)] md:px-[var(--inset-lg,16px)] sm:px-[var(--inset-md,12px)] py-0 relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 text-center whitespace-pre-wrap">
            Verträge in Minuten statt Stunden – in vier Schritten
          </p>
        </div>
      </div>

      {/* Four Steps as responsive cards (2x2 as in Figma) */}
      <div className="w-full max-w-[1204px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {[
            { step: 1, title: 'Vorlage wählen', desc: 'Passende Vorlage auswählen, oder Kontext hochladen und der KI-Agent findet die passende Vorlage.' },
            { step: 2, title: 'Mandantendaten übernommen', desc: 'Vorlage wird automatisch mit den Mandantendaten befüllt und in den Editor geladen.' },
            { step: 3, title: 'Entwurf anpassen', desc: 'Der Entwurf kann individuell im Dokumenteneditor angepasst werden.' },
            { step: 4, title: 'Prüfen & versenden', desc: 'Finalisieren, freigeben und exportieren als Word-Dokument oder PDF.' },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="border border-neutral-n200 rounded-xl p-4 md:p-4 shadow-sm bg-neutral-n0 flex flex-col gap-3 min-h-[150px] md:min-h-[160px] lg:min-h-[168px] md:hover:-translate-y-[2px] md:hover:shadow-md transition-all duration-200"
            >
              {/* Header row: title + step badge */}
              <div className="flex items-center gap-3">
                <p className="font-dm-sans font-bold text-neutral-n1000 text-[18px] md:text-[20px] leading-tight flex-1 min-w-0">
                  {title}
                </p>
                <div className="bg-gradient-to-br from-primary-pr500 to-primary-pr600 text-white rounded-full size-10 md:size-11 flex items-center justify-center shrink-0 font-dm-sans font-bold">
                  {step}
                </div>
              </div>

              {/* Optional image for step 1 */}
              {step === 1 && (
                <div className="w-full flex items-center justify-center">
                  <img src={SchrittEins} alt="Schritt 1: Vorlage anlegen" className="w-full max-w-[300px] md:max-w-[320px] h-auto object-contain" />
                </div>
              )}

              {/* Optional image for step 2 */}
              {step === 2 && (
                <div className="w-full flex items-center justify-center">
                  <img src={SchrittZwei} alt="Schritt 2: Daten verknüpfen" className="w-full max-w-[300px] md:max-w-[320px] h-auto object-contain" />
                </div>
              )}

              {/* Optional image for step 3 */}
              {step === 3 && (
                <div className="w-full flex items-center justify-center">
                  <img src={SchrittDrei} alt="Schritt 3: Dokument erstellen" className="w-full max-w-[300px] md:max-w-[320px] h-auto object-contain" />
                </div>
              )}

              {/* Optional image for step 4 */}
              {step === 4 && (
                <div className="w-full flex items-center justify-center">
                  <img src={SchrittVier} alt="Schritt 4: Prüfen & versenden" className="w-full max-w-[300px] md:max-w-[320px] h-auto object-contain" />
                </div>
              )}

              {/* Description */}
              <p className="text-neutral-n800 opacity-80 text-[15px] md:text-[16px] leading-[1.6]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SolutionSection

import React from 'react'
import containerBanner from '../assets/Container.svg'

const SolutionSection = () => {
  return (
    <div id="how-it-works" className="bg-neutral-n0 box-border content-stretch flex flex-col gap-[var(--section-spacing-md,48px)] lg:gap-[var(--section-spacing-md,48px)] md:gap-[var(--section-spacing-sm,32px)] sm:gap-[var(--section-spacing-xs,24px)] items-center overflow-clip pb-[var(--section-spacing-xl,80px)] lg:pb-[var(--section-spacing-xl,80px)] md:pb-[var(--section-spacing-lg,60px)] sm:pb-[var(--section-spacing-md,48px)] pt-[var(--section-spacing-xl,80px)] lg:pt-[var(--section-spacing-xl,80px)] md:pt-[var(--section-spacing-lg,60px)] sm:pt-[var(--section-spacing-md,48px)] px-[var(--inset-3xl,32px)] lg:px-[var(--inset-3xl,32px)] md:px-[var(--inset-xl,20px)] sm:px-[var(--inset-lg,16px)] relative shrink-0 w-full max-w-[1440px]">
      {/* Header Section */}
      <div className="content-stretch flex flex-col gap-[var(--stack-lg,16px)] lg:gap-[var(--stack-lg,16px)] md:gap-[var(--stack-md,12px)] sm:gap-[var(--stack-sm,8px)] items-center max-w-[612px] lg:max-w-[612px] md:max-w-[500px] sm:max-w-[400px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-dm-sans font-bold leading-[1.16] lg:leading-[1.16] md:leading-[1.2] sm:leading-[1.3] min-h-px min-w-px relative shrink-0 text-[39px] lg:text-[39px] md:text-[32px] sm:text-[28px] text-neutral-n1000 text-center whitespace-pre-wrap">
            Unsere Lösung
          </p>
        </div>
        <div className="box-border content-stretch flex gap-[var(--stack-sm,8px)] items-center max-w-[820px] lg:max-w-[820px] md:max-w-[600px] sm:max-w-[400px] px-[var(--inset-xl,20px)] lg:px-[var(--inset-xl,20px)] md:px-[var(--inset-lg,16px)] sm:px-[var(--inset-md,12px)] py-0 relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 text-center whitespace-pre-wrap">
            Verträge in Minuten statt Stunden
          </p>
        </div>
      </div>

      {/* Image Banner (Container.svg) */}
      <div className="w-full max-w-[1000px] lg:max-w-[1000px] md:max-w-[800px] sm:max-w-[400px]">
        <img
          src={containerBanner}
          alt="Prozessübersicht: Unsere Lösung"
          className="block w-full h-auto rounded-[16px] shadow-md"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  )
}

export default SolutionSection

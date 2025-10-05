
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-neutral-n0 box-border content-stretch flex flex-col gap-[24px] lg:gap-[24px] md:gap-[20px] sm:gap-[16px] items-center pb-[var(--inset-lg,16px)] lg:pb-[var(--inset-lg,16px)] md:pb-[var(--inset-md,12px)] sm:pb-[var(--inset-sm,8px)] pt-[var(--section-spacing-md,32px)] lg:pt-[var(--section-spacing-md,32px)] md:pt-[var(--section-spacing-sm,24px)] sm:pt-[var(--section-spacing-sm,16px)] px-[var(--inset-3xl,32px)] lg:px-[var(--inset-3xl,32px)] md:px-[var(--inset-xl,20px)] sm:px-[var(--inset-lg,16px)] relative shrink-0 w-full max-w-[1440px]">
      <div className="content-stretch flex flex-col items-center max-w-[1204px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[var(--stack-sm,8px)] h-px items-center justify-center relative shrink-0 w-full">
          <div className="h-0 relative shrink-0 w-full">
            <div className="h-[1px] bg-neutral-n200 w-full"></div>
          </div>
        </div>
        <div className="box-border content-center flex flex-wrap gap-[var(--inline-2xl,24px)] items-center justify-center px-0 py-[var(--inset-xl,20px)] relative shrink-0 w-full lg:flex-row md:flex-col sm:flex-col">
          <p className="font-inter font-normal leading-[1.4] text-[14px] text-neutral-n700 text-center order-2 lg:order-1 w-full lg:w-auto">
            ©2025 Drafto - kontakt@drafto.de
          </p>
          <div className="flex gap-[24px] lg:gap-[24px] md:gap-[16px] sm:gap-[12px] items-center justify-center order-1 lg:order-2 w-full lg:w-auto">
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="content-stretch flex gap-[var(--inline-xs,4px)] items-center relative shrink-0">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0">
                  <p className="font-dm-sans font-medium leading-[1.26] relative shrink-0 text-[14px] text-neutral-n800 text-center">
                    AGB
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="content-stretch flex gap-[var(--inline-xs,4px)] items-center relative shrink-0">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0">
                  <p className="font-dm-sans font-medium leading-[1.26] relative shrink-0 text-[14px] text-neutral-n800 text-center">
                    Impressum
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="content-stretch flex gap-[var(--inline-xs,4px)] items-center relative shrink-0">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0">
                  <p className="font-dm-sans font-medium leading-[1.26] relative shrink-0 text-[14px] text-neutral-n800 text-center">
                    Datenschutz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

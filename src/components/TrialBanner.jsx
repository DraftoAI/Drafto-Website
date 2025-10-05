import React from 'react'

const TrialBanner = () => {
  return (
    <div className="bg-primary-pr500 content-stretch flex flex-col gap-[var(--stack-lg,16px)] items-center overflow-clip pb-[var(--inset-sm,8px)] pt-[var(--inset-sm,8px)] px-[var(--inset-xl,20px)] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[var(--stack-sm,8px)] items-center max-w-[1204px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[20px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="white"/>
                <path d="M9 5h2v6H9V5zm0 8h2v2H9v-2z" fill="white"/>
              </svg>
            </div>
            <p className="flex-[1_0_0] font-inter font-medium leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white text-center whitespace-pre-wrap">
              Kostenloser Testzugang verfügbar
            </p>
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="content-stretch flex gap-[var(--inline-xs,4px)] items-center relative shrink-0">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0">
                  <p className="font-dm-sans font-medium leading-[1.26] relative shrink-0 text-[14px] text-white text-center">
                    Jetzt testen
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

export default TrialBanner

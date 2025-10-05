import React, { useState } from 'react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(-1)

  const faqs = [
    {
      question: "Was ist Drafto und wodurch unterscheidet es sich?",
      answer: "Drafto automatisiert die Erstellung standardisierter Dokumente mit Vorlagen, Platzhaltern und Datenbank‑Mapping. Im Unterschied zu klassischen Textbaustein‑Tools kombiniert Drafto einen kollaborativen Editor, KI‑gestützte Entwürfe, Versionsverlauf und vollständigen Audit‑Trail."
    },
    {
      question: "Wie funktioniert das KI-Feature?",
      answer: "Das KI-Feature von Drafto nutzt moderne Sprachmodelle, um automatisch Platzhalter in Dokumenten zu erkennen und diese mit den entsprechenden Datenbankeinträgen zu verknüpfen. Es kann auch bei der Generierung neuer Dokumente helfen und Vorschläge für Formulierungen machen."
    },
    {
      question: "Sind meine Daten sicher?",
      answer: "Ja, Drafto nutzt Microsoft Azure als Fundament für Datenschutz und Compliance. Mit EU Data Boundary, Privacy-by-Design, Azure OpenAI DataZone und umfassenden Betroffenenrechten wird DSGVO-Konformität im Kanzlei-Tagesbetrieb gewährleistet."
    },
    {
      question: "Wie kann ich Drafto integrieren?",
      answer: "Drafto bietet verschiedene Integrationsmöglichkeiten über APIs und Webhooks. Sie können es in bestehende Kanzlei-Software integrieren oder als eigenständige Lösung nutzen. Unser Support-Team hilft gerne bei der Einrichtung."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <div id="faq" className="bg-neutral-n0 box-border content-stretch flex flex-col gap-[var(--section-spacing-sm,32px)] lg:gap-[var(--section-spacing-sm,32px)] md:gap-[var(--section-spacing-sm,32px)] sm:gap-[var(--section-spacing-xs,24px)] items-center overflow-clip pb-[var(--section-spacing-sm,32px)] lg:pb-[var(--section-spacing-sm,32px)] md:pb-[var(--section-spacing-sm,32px)] sm:pb-[var(--section-spacing-xs,24px)] pt-[var(--section-spacing-lg,60px)] lg:pt-[var(--section-spacing-lg,60px)] md:pt-[var(--section-spacing-md,48px)] sm:pt-[var(--section-spacing-md,48px)] px-[var(--inset-3xl,32px)] lg:px-[var(--inset-3xl,32px)] md:px-[var(--inset-xl,20px)] sm:px-[var(--inset-lg,16px)] relative shrink-0 w-full max-w-[1440px]">
      <div className="content-start flex flex-wrap gap-[var(--section-spacing-md,48px)] lg:gap-[var(--section-spacing-md,48px)] md:gap-[var(--section-spacing-lg,60px)] sm:gap-[var(--section-spacing-md,48px)] items-start max-w-[1204px] lg:max-w-[1204px] md:max-w-[800px] sm:max-w-[400px] relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-2xl,24px)] lg:gap-[var(--stack-2xl,24px)] md:gap-[var(--stack-xl,20px)] sm:gap-[var(--stack-lg,16px)] items-start justify-end max-w-[476px] lg:max-w-[476px] md:max-w-[400px] sm:max-w-[350px] min-h-px min-w-[360px] lg:min-w-[360px] md:min-w-[320px] sm:min-w-[280px] pl-0 pr-[40px] lg:pr-[40px] md:pr-[20px] sm:pr-0 py-0 relative shrink-0">
          <div className="content-stretch flex flex-col gap-[var(--stack-lg,16px)] items-start relative shrink-0 w-full">
            <div className="bg-neutral-n0 border border-neutral-n300 shadow-sm box-border content-stretch flex items-center gap-[12px] px-[20px] py-[10px] relative rounded-full shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2l1.5 3.5L15 6l-2.5 2.5L13 12l-3-1.5L7 12l.5-3.5L5 6l3.5-.5L10 2z" fill="#6099f7"/>
                  <path d="M6 8l1 1.5" stroke="#6099f7" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M14 8l-1 1.5" stroke="#6099f7" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="font-dm-sans font-medium leading-[1.3] not-italic relative shrink-0 text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-neutral-n800 text-center">
                FAQ
              </p>
            </div>
            <div className="content-stretch flex gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-dm-sans font-bold leading-[1.16] min-h-px min-w-px relative shrink-0 text-[39px] lg:text-[39px] md:text-[32px] sm:text-[28px] text-neutral-n1000 whitespace-pre-wrap">
                Häufige Fragen
              </p>
            </div>
            <div className="box-border content-stretch flex gap-[var(--stack-sm,8px)] items-center pl-0 pr-[24px] py-0 relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] text-neutral-n800 whitespace-pre-wrap">
                Antworten zu Funktionen, Sicherheit und Integration – kompakt erklärt.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-2xl,24px)] items-center min-h-px min-w-[360px] relative shrink-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-neutral-n400 border-b-[1.003px] border-l-0 border-r-0 border-solid border-t-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                <div 
                  className="box-border content-stretch flex gap-[16px] items-start pb-[var(--stack-2xl,24px)] pl-0 pr-[var(--inline-xl,20px)] pt-0 relative shrink-0 w-full cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="box-border content-stretch flex gap-[10px] items-start px-0 py-[6px] relative self-stretch shrink-0 w-[4px]">
                    <div className="bg-primary-pr600 flex-[1_0_0] h-full min-h-px min-w-px rounded-[2px] shrink-0"></div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-dm-sans font-bold justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[20px] text-neutral-n1000">
                    <p className="leading-[1.42] whitespace-pre-wrap">{faq.question}</p>
                  </div>
                  <div className="box-border content-stretch flex gap-[var(--stack-sm,8px)] items-start pb-0 pt-[2px] px-0 relative shrink-0">
                    <div className="relative shrink-0 size-[24px]">
                      {openFAQ === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 14l5-5 5 5" stroke="#4b5162" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10l5 5 5-5" stroke="#4b5162" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                {openFAQ === index && (
                  <div className="box-border content-stretch flex gap-[10px] items-start pb-[var(--stack-xl,20px)] pl-0 pr-[var(--inline-xl,20px)] pt-0 relative shrink-0 w-full">
                    <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-neutral-n800 whitespace-pre-wrap">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQSection

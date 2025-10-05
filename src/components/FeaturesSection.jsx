import React from 'react'
import ImgVorlagenerstellung from '../assets/Vorlagentest.png'
import ImgDokumentenerstellung from '../assets/Dokumentenerstellung_final.png'
import ImgDokumenteneditor from '../assets/Dokumenteneditor_final.png'
import ImgDatenschutz from '../assets/Datenschutz.png'

const FeaturesSection = () => {
  return (
    <div id="features" className="bg-neutral-n0 box-border content-stretch flex flex-col gap-[var(--section-spacing-md,48px)] lg:gap-[var(--section-spacing-md,48px)] md:gap-[var(--section-spacing-sm,32px)] sm:gap-[var(--section-spacing-xs,24px)] items-center overflow-clip pb-[var(--section-spacing-xl,80px)] lg:pb-[var(--section-spacing-xl,80px)] md:pb-[var(--section-spacing-lg,60px)] sm:pb-[var(--section-spacing-md,48px)] pt-[var(--section-spacing-xl,80px)] lg:pt-[var(--section-spacing-xl,80px)] md:pt-[var(--section-spacing-lg,60px)] sm:pt-[var(--section-spacing-md,48px)] px-[var(--inset-3xl,32px)] lg:px-[var(--inset-3xl,32px)] md:px-[var(--inset-xl,20px)] sm:px-[var(--inset-lg,16px)] relative shrink-0 w-full max-w-[1440px]">
      {/* Header Section - Zentriert */}
      <div className="content-stretch flex flex-col gap-[var(--stack-3xl,32px)] lg:gap-[var(--stack-3xl,32px)] md:gap-[var(--stack-2xl,24px)] sm:gap-[var(--stack-xl,20px)] items-center max-w-[612px] lg:max-w-[612px] md:max-w-[500px] sm:max-w-[400px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[var(--stack-lg,16px)] lg:gap-[var(--stack-lg,16px)] md:gap-[var(--stack-md,12px)] sm:gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[var(--stack-sm,8px)] items-center relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-dm-sans font-bold leading-[1.16] lg:leading-[1.16] md:leading-[1.2] sm:leading-[1.3] min-h-px min-w-px relative shrink-0 text-[39px] lg:text-[39px] md:text-[32px] sm:text-[28px] text-neutral-n1000 text-center whitespace-pre-wrap">
              Funktionalitäten
            </p>
          </div>
          <div className="box-border content-stretch flex gap-[var(--stack-sm,8px)] items-center max-w-[820px] lg:max-w-[820px] md:max-w-[600px] sm:max-w-[400px] px-[var(--inset-xl,20px)] lg:px-[var(--inset-xl,20px)] md:px-[var(--inset-lg,16px)] sm:px-[var(--inset-md,12px)] py-0 relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 text-center whitespace-pre-wrap">
              Die wichtigsten Funktionen von Drafto im Überblick
            </p>
          </div>
        </div>
      </div>
      
      {/* Features Cards - Zentriert */}
      <div className="content-stretch flex flex-col gap-[var(--section-spacing-2xl,112px)] lg:gap-[var(--section-spacing-2xl,112px)] md:gap-[var(--section-spacing-xl,80px)] sm:gap-[var(--section-spacing-lg,60px)] items-center relative shrink-0 w-full max-w-[1204px] lg:max-w-[1204px] md:max-w-[800px] sm:max-w-[400px]">
        {/* Feature Card 1 - Vorlagenerstellung: Desktop: Links Bild, Rechts Text | Mobile: Text oben, Bild unten */}
        <div className="bg-neutral-n0 content-center flex flex-col lg:grid lg:grid-cols-2 gap-[var(--section-spacing-xl,80px)] lg:gap-[var(--section-spacing-xl,80px)] md:gap-[var(--section-spacing-lg,60px)] sm:gap-[var(--section-spacing-md,48px)] items-center lg:items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-sm,8px)] items-center min-h-px w-full min-w-0 relative shrink-0 lg:order-1 md:order-2 sm:order-2">
            <div className="relative shrink-0 w-full max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-[var(--border-radius-xl,16px)] lg:rounded-[var(--border-radius-xl,16px)] md:rounded-[var(--border-radius-lg,12px)] sm:rounded-[var(--border-radius-md,8px)] flex items-center justify-center overflow-hidden">
              <img src={ImgVorlagenerstellung} alt="Vorlagenerstellung Illustration" className="w-full h-auto object-contain p-6 lg:p-8" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] lg:gap-[12px] md:gap-[10px] sm:gap-[8px] items-start justify-center max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] w-full min-w-0 relative shrink-0 whitespace-pre-wrap lg:order-2 md:order-1 sm:order-1 rounded-[var(--border-radius-xl,16px)] border border-neutral-n200 p-6 lg:p-8 transition-all duration-200 ease-out shadow-sm md:hover:-translate-y-1 md:hover:shadow-lg md:hover:border-primary-pr400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pr500 active:scale-[0.99]">
            <p className="font-dm-sans font-bold leading-[1.28] lg:leading-[1.28] md:leading-[1.3] sm:leading-[1.4] relative shrink-0 text-[31px] lg:text-[31px] md:text-[28px] sm:text-[24px] text-neutral-n1000 w-full underline decoration-primary-pr600 underline-offset-4">
              Vorlagenerstellung
            </p>
            <p className="font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 w-full">
              Vorausgefüllte Verträge können hochgeladen werden. Unser KI-Agent erkennt alle Platzhalter und ordnet sie zu den passenden Datenbankelementen zu. Diese Vorlage kann jetzt in der Vertragserstellung genutzt werden.
            </p>
          </div>
        </div>

        {/* Feature Card 2 - Dokumentenerstellung: Desktop: Links Text, Rechts Bild | Mobile: Bild oben, Text unten */}
        <div className="bg-neutral-n0 content-center flex flex-col lg:grid lg:grid-cols-2 gap-[var(--section-spacing-xl,80px)] lg:gap-[var(--section-spacing-xl,80px)] md:gap-[var(--section-spacing-lg,60px)] sm:gap-[var(--section-spacing-md,48px)] items-center lg:items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] lg:gap-[12px] md:gap-[10px] sm:gap-[8px] items-start justify-center max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] w-full min-w-0 relative shrink-0 whitespace-pre-wrap lg:order-1 md:order-2 sm:order-2 rounded-[var(--border-radius-xl,16px)] border border-neutral-n200 p-6 lg:p-8 transition-all duration-200 ease-out shadow-sm md:hover:-translate-y-1 md:hover:shadow-lg md:hover:border-primary-pr400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pr500 active:scale-[0.99]">
            <p className="font-dm-sans font-bold leading-[1.28] lg:leading-[1.28] md:leading-[1.3] sm:leading-[1.4] relative shrink-0 text-[31px] lg:text-[31px] md:text-[28px] sm:text-[24px] text-neutral-n1000 w-full underline decoration-primary-pr600 underline-offset-4">
              Dokumentenerstellung
            </p>
            <p className="font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 w-full">
              KI-Agent erkennt in einem Schriftsatz automatisch die benötigte Vorlage und den zugehörigen Mandanten und generiert ein vorausgefülltes Dokument im Editor
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-sm,8px)] items-center min-h-px w-full min-w-0 relative shrink-0 lg:order-2 md:order-1 sm:order-1">
            <div className="relative shrink-0 w-full max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-[var(--border-radius-xl,16px)] lg:rounded-[var(--border-radius-xl,16px)] md:rounded-[var(--border-radius-lg,12px)] sm:rounded-[var(--border-radius-md,8px)] flex items-center justify-center overflow-hidden">
              <img src={ImgDokumentenerstellung} alt="Dokumentenerstellung Illustration" className="w-full h-auto object-contain p-6 lg:p-8" />
            </div>
          </div>
        </div>

        {/* Feature Card 3 - Dokumenteneditor: Desktop: Links Bild, Rechts Text | Mobile: Text oben, Bild unten */}
        <div className="bg-neutral-n0 content-center flex flex-col lg:grid lg:grid-cols-2 gap-[var(--section-spacing-xl,80px)] lg:gap-[var(--section-spacing-xl,80px)] md:gap-[var(--section-spacing-lg,60px)] sm:gap-[var(--section-spacing-md,48px)] items-center lg:items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-sm,8px)] items-center min-h-px w-full min-w-0 relative shrink-0 lg:order-1 md:order-2 sm:order-2">
            <div className="relative shrink-0 w-full max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-[var(--border-radius-xl,16px)] lg:rounded-[var(--border-radius-xl,16px)] md:rounded-[var(--border-radius-lg,12px)] sm:rounded-[var(--border-radius-md,8px)] flex items-center justify-center overflow-hidden">
              <img src={ImgDokumenteneditor} alt="Dokumenteneditor Illustration" className="w-full h-auto object-contain p-6 lg:p-8" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] lg:gap-[12px] md:gap-[10px] sm:gap-[8px] items-start justify-center max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] w-full min-w-0 relative shrink-0 whitespace-pre-wrap lg:order-2 md:order-1 sm:order-1 rounded-[var(--border-radius-xl,16px)] border border-neutral-n200 p-6 lg:p-8 transition-all duration-200 ease-out shadow-sm md:hover:-translate-y-1 md:hover:shadow-lg md:hover:border-primary-pr400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pr500 active:scale-[0.99]">
            <p className="font-dm-sans font-bold leading-[1.28] lg:leading-[1.28] md:leading-[1.3] sm:leading-[1.4] relative shrink-0 text-[31px] lg:text-[31px] md:text-[28px] sm:text-[24px] text-neutral-n1000 w-full underline decoration-primary-pr600 underline-offset-4">
              Dokumenteneditor
            </p>
            <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 w-full">
              Mit dem Dokumenteneditor von Drafto erstellen und bearbeiten Sie Verträge direkt im Browser – strukturiert, schnell und fehlerarm. Vorlagen mit Platzhaltern befüllen sich automatisch aus dem Mandantenstamm; Baustein- und Klauselbibliothek sorgt für konsistente Formulierungen.
            </p>
          </div>
        </div>

        {/* Feature Card 4 - Datenschutz: Desktop: Links Text, Rechts Bild | Mobile: Bild oben, Text unten */}
        <div className="bg-neutral-n0 content-center flex flex-col lg:grid lg:grid-cols-2 gap-[var(--section-spacing-xl,80px)] lg:gap-[var(--section-spacing-xl,80px)] md:gap-[var(--section-spacing-lg,60px)] sm:gap-[var(--section-spacing-md,48px)] items-center lg:items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] lg:gap-[12px] md:gap-[10px] sm:gap-[8px] items-start justify-center max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] w-full min-w-0 relative shrink-0 whitespace-pre-wrap lg:order-1 md:order-2 sm:order-2 rounded-[var(--border-radius-xl,16px)] border border-neutral-n200 p-6 lg:p-8 transition-all duration-200 ease-out shadow-sm md:hover:-translate-y-1 md:hover:shadow-lg md:hover:border-primary-pr400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-pr500 active:scale-[0.99]">
            <p className="font-dm-sans font-bold leading-[1.28] lg:leading-[1.28] md:leading-[1.3] sm:leading-[1.4] relative shrink-0 text-[31px] lg:text-[31px] md:text-[28px] sm:text-[24px] text-neutral-n1000 w-full underline decoration-primary-pr600 underline-offset-4">
              Datenschutz
            </p>
            <p className="flex-[1_0_0] font-inter font-normal leading-[1.6] lg:leading-[1.6] md:leading-[1.5] sm:leading-[1.4] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-neutral-n800 w-full">
              Drafto nutzt Microsoft Azure als Fundament für Datenschutz und Compliance von Anfang an: Mit EU Data Boundary, Privacy-by-Design, Azure OpenAI DataZone und umfassenden Betroffenenrechten wird DSGVO-Komfort im Kanzlei-Tagesbetrieb greifbar.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--stack-sm,8px)] items-center min-h-px w-full min-w-0 relative shrink-0 lg:order-2 md:order-1 sm:order-1">
            <div className="relative shrink-0 w-full max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[350px] min-h-[300px] lg:min-h-[300px] md:min-h-[220px] sm:min-h-[180px] bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-[var(--border-radius-xl,16px)] lg:rounded-[var(--border-radius-xl,16px)] md:rounded-[var(--border-radius-lg,12px)] sm:rounded-[var(--border-radius-md,8px)] flex items-center justify-center overflow-hidden">
              <img src={ImgDatenschutz} alt="Datenschutz Illustration" className="w-full h-auto object-contain p-6 lg:p-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
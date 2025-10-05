import React from 'react'
import ImgVorlagenerstellung from '../assets/Vorlagentest.png'
import ImgDokumentenerstellung from '../assets/Dokumentenerstellung_final.png'
import ImgDokumenteneditor from '../assets/Dokumenteneditor_final.png'
import ImgDatenschutz from '../assets/Datenschutz.png'

const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="bg-neutral-n0 flex flex-col items-center w-full max-w-[1440px] px-6 md:px-10 lg:px-12 py-20 md:py-24 lg:py-28 gap-16"
    >
      {/* Header */}
      <div className="text-center max-w-[620px]">
        <h2 className="font-dm-sans font-bold text-[32px] md:text-[36px] lg:text-[40px] text-neutral-n1000 mb-4">
          Funktionalitäten
        </h2>
        <p className="text-neutral-n800 opacity-80 text-[16px] md:text-[17px]">
          Die wichtigsten Funktionen von Drafto im Überblick
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col w-full max-w-[1200px] gap-24 md:gap-28 lg:gap-32">

        {/* Card 1 - Vorlagenerstellung */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Bild */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-2xl flex items-center justify-center overflow-hidden w-full max-w-[520px] min-h-[280px]">
              <img src={ImgVorlagenerstellung} alt="Vorlagenerstellung" className="object-contain w-full p-6" />
            </div>
          </div>
          {/* Text */}
          <div className="flex flex-col gap-4 border border-neutral-n200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-dm-sans font-bold text-[28px] text-neutral-n1000 underline decoration-primary-pr600 underline-offset-4">
              Vorlagenerstellung
            </h3>
            <p className="text-neutral-n800 opacity-80 text-[16px] leading-[1.6]">
              Vorausgefüllte Verträge können hochgeladen werden. Unser KI-Agent erkennt alle Platzhalter
              und ordnet sie zu den passenden Datenbankelementen zu. Diese Vorlage kann jetzt in der Vertragserstellung
              genutzt werden.
            </p>
          </div>
        </div>

        {/* Card 2 - Dokumentenerstellung */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-2xl flex items-center justify-center overflow-hidden w-full max-w-[520px] min-h-[280px]">
              <img src={ImgDokumentenerstellung} alt="Dokumentenerstellung" className="object-contain w-full p-6" />
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-neutral-n200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-dm-sans font-bold text-[28px] text-neutral-n1000 underline decoration-primary-pr600 underline-offset-4">
              Dokumentenerstellung
            </h3>
            <p className="text-neutral-n800 opacity-80 text-[16px] leading-[1.6]">
              Der KI-Agent erkennt in einem Schriftsatz automatisch die benötigte Vorlage und den zugehörigen Mandanten
              und generiert ein vorausgefülltes Dokument im Editor.
            </p>
          </div>
        </div>

        {/* Card 3 - Dokumenteneditor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-2xl flex items-center justify-center overflow-hidden w-full max-w-[520px] min-h-[280px]">
              <img src={ImgDokumenteneditor} alt="Dokumenteneditor" className="object-contain w-full p-6" />
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-neutral-n200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-dm-sans font-bold text-[28px] text-neutral-n1000 underline decoration-primary-pr600 underline-offset-4">
              Dokumenteneditor
            </h3>
            <p className="text-neutral-n800 opacity-80 text-[16px] leading-[1.6]">
              Mit dem Dokumenteneditor von Drafto erstellen und bearbeiten Sie Verträge direkt im Browser –
              strukturiert, schnell und fehlerarm. Vorlagen mit Platzhaltern befüllen sich automatisch aus dem
              Mandantenstamm; Baustein- und Klauselbibliothek sorgt für konsistente Formulierungen.
            </p>
          </div>
        </div>

        {/* Card 4 - Datenschutz */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary-pr500 to-primary-pr600 rounded-2xl flex items-center justify-center overflow-hidden w-full max-w-[520px] min-h-[280px]">
              <img src={ImgDatenschutz} alt="Datenschutz" className="object-contain w-full p-6" />
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-neutral-n200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-dm-sans font-bold text-[28px] text-neutral-n1000 underline decoration-primary-pr600 underline-offset-4">
              Datenschutz
            </h3>
            <p className="text-neutral-n800 opacity-80 text-[16px] leading-[1.6]">
              Drafto nutzt Microsoft Azure als Fundament für Datenschutz und Compliance von Anfang an: Mit EU Data
              Boundary, Privacy-by-Design, Azure OpenAI DataZone und umfassenden Betroffenenrechten wird DSGVO-Komfort
              im Kanzlei-Tagesbetrieb greifbar.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturesSection

# Drafto Landing Page

Eine moderne, responsive Landing Page für Drafto - die KI-gestützte Dokumentenerstellung für Kanzleien.

## 🚀 Features

- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Moderne UI**: Basierend auf dem Figma-Design mit Tailwind CSS
- **React-basiert**: Modulare Komponenten-Architektur
- **Performance**: Optimiert für schnelle Ladezeiten
- **Accessibility**: Barrierefreie Navigation und Interaktionen

## 📋 Sektionen

1. **Trial Banner**: Kostenloser Testzugang-Hinweis
2. **Hero Section**: Hauptüberschrift und Call-to-Action
3. **Features Section**: Funktionalitäten im Detail
   - Vorlagenerstellung
   - Dokumentenerstellung
   - Dokumenteneditor
   - Datenschutz
4. **FAQ Section**: Häufige Fragen mit interaktiven Antworten
5. **Footer**: Links und Kontaktinformationen

## 🛠️ Technologie-Stack

- **React 18**: Moderne React-Features
- **Vite**: Schneller Build-Tool und Dev-Server
- **Tailwind CSS**: Utility-first CSS Framework
- **PostCSS**: CSS-Verarbeitung
- **Autoprefixer**: Automatische Browser-Präfixe

## 🚀 Installation und Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Preview des Production Builds
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## 🎨 Design System

### Farben
- **Primary**: #6099f7 (pr500), #387ff5 (pr600)
- **Neutral**: #ffffff (n0) bis #1c1f25 (n1000)
- **Alpha**: rgba(56,127,245,0.1) (pra10)

### Typografie
- **Headings**: DM Sans (Bold)
- **Body**: Inter (Regular/Medium)

### Spacing
- **Stack**: 4px - 32px (vertikale Abstände)
- **Section**: 48px - 128px (Sektionsabstände)
- **Inset**: 8px - 40px (Padding)

## 📁 Projektstruktur

```
src/
├── components/
│   ├── TrialBanner.jsx      # Banner für Testzugang
│   ├── LandingPage.jsx     # Hauptlayout
│   ├── HeroSection.jsx     # Hero-Bereich
│   ├── FeaturesSection.jsx # Funktionalitäten
│   ├── FAQSection.jsx      # FAQ mit Interaktivität
│   └── Footer.jsx          # Footer
├── App.jsx                 # Haupt-App-Komponente
├── main.jsx               # React Entry Point
└── index.css              # Globale Styles
```

## 🔧 Anpassungen

### Farben ändern
Bearbeiten Sie die Farbdefinitionen in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    pr500: '#6099f7',
    pr600: '#387ff5',
  },
  // ...
}
```

### Inhalte anpassen
Alle Texte und Inhalte sind in den jeweiligen Komponenten-Dateien definiert und können einfach angepasst werden.

## 📄 Lizenz

MIT License - siehe LICENSE Datei für Details.

## 🤝 Support

Bei Fragen oder Problemen kontaktieren Sie uns unter: kontakt@drafto.de

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

// React Icons Imports
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaBullseye, 
  FaLock, 
  FaUser, 
  FaDatabase,
  FaClipboardList,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTrophy,
  FaCertificate,
  FaGlobe,
  FaCloud
} from 'react-icons/fa';

import {
  MdSecurity,
  MdPrivacyTip,
  MdVerifiedUser,
  MdMonitor,
  MdStorage,
  MdVpnLock
} from 'react-icons/md';

import {
  HiShieldCheck,
  HiDocumentSearch,
  HiCog
} from 'react-icons/hi';

function DSGVOTooltip({ article, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const dsgvoArticles = {
    'Art. 5': {
      title: 'Grundsätze für die Verarbeitung personenbezogener Daten',
      content: 'Personenbezogene Daten müssen auf rechtmäßige Weise, nach Treu und Glauben und in einer für die betroffene Person nachvollziehbaren Weise verarbeitet werden.'
    },
    'Art. 6': {
      title: 'Rechtmäßigkeit der Verarbeitung',
      content: 'Die Verarbeitung ist nur rechtmäßig, wenn mindestens eine der nachstehenden Bedingungen erfüllt ist: Einwilligung, Vertragserfüllung, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe oder berechtigte Interessen.'
    },
    'Art. 15': {
      title: 'Auskunftsrecht der betroffenen Person',
      content: 'Die betroffene Person hat das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden.'
    },
    'Art. 16': {
      title: 'Recht auf Berichtigung',
      content: 'Die betroffene Person hat das Recht, von dem Verantwortlichen unverzüglich die Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen.'
    },
    'Art. 17': {
      title: 'Recht auf Löschung ("Recht auf Vergessenwerden")',
      content: 'Die betroffene Person hat das Recht, von dem Verantwortlichen zu verlangen, dass sie betreffende personenbezogene Daten unverzüglich gelöscht werden.'
    },
    'Art. 20': {
      title: 'Recht auf Datenübertragbarkeit',
      content: 'Die betroffene Person hat das Recht, die sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.'
    },
    'Art. 25': {
      title: 'Datenschutz durch Technikgestaltung',
      content: 'Der Verantwortliche trifft geeignete technische und organisatorische Maßnahmen, die dafür ausgelegt sind, die Datenschutzgrundsätze wirksam umzusetzen.'
    },
    'Art. 28': {
      title: 'Auftragsverarbeiter',
      content: 'Erfolgt eine Verarbeitung im Auftrag eines Verantwortlichen, so arbeitet dieser nur mit Auftragsverarbeitern, die hinreichend Garantien dafür bieten.'
    },
    'Art. 30': {
      title: 'Verzeichnis von Verarbeitungstätigkeiten',
      content: 'Jeder Verantwortliche führt ein Verzeichnis aller Verarbeitungstätigkeiten, die ihrer Zuständigkeit unterliegen.'
    },
    'Art. 32': {
      title: 'Sicherheit der Verarbeitung',
      content: 'Der Verantwortliche und der Auftragsverarbeiter treffen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.'
    },
    'Art. 33': {
      title: 'Meldung von Verletzungen des Schutzes personenbezogener Daten',
      content: 'Im Falle einer Verletzung des Schutzes personenbezogener Daten meldet der Verantwortliche unverzüglich und möglichst binnen 72 Stunden diese der zuständigen Aufsichtsbehörde.'
    },
    'Art. 35': {
      title: 'Datenschutz-Folgenabschätzung',
      content: 'Hat eine Form der Verarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge, so führt der Verantwortliche vorab eine Abschätzung der Folgen durch.'
    }
  };

  const citationData = dsgvoArticles[article];

  return (
    <span 
      className="relative inline-block cursor-help transition-all duration-200 hover:text-primary-pr600"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && citationData && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 max-w-90vw bg-white border-2 border-primary-pr200 rounded-xl p-5 shadow-xl z-50 backdrop-blur-sm animate-fade-in">
          <h4 className="text-lg font-bold text-primary-pr600 mb-2 border-b border-neutral-n200 pb-2">
            {citationData.title}
          </h4>
          <div className="text-sm text-neutral-n800 leading-relaxed">
            {citationData.content}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-primary-pr200"></div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-0.5 border-6 border-transparent border-t-white"></div>
        </div>
      )}
    </span>
  );
}

function PrivacyCard({ title, description, azureFeatures, dsgvoReferences, IconComponent }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-n200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gradient-to-br from-primary-pr50 to-primary-pr100 text-primary-pr600 p-3 rounded-xl flex items-center justify-center border border-primary-pr200 min-w-12 min-h-12">
          <IconComponent className="text-xl" />
        </div>
        <h3 className="text-xl font-bold text-neutral-n1000 leading-tight">{title}</h3>
      </div>
      
      <p className="text-neutral-n800 leading-relaxed mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-primary-pr600 mb-3">Azure-Implementierung:</h4>
        <ul className="space-y-2">
          {azureFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-n700">
              <span className="text-primary-pr600 font-bold mt-0.5">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {dsgvoReferences.map((article, index) => (
          <DSGVOTooltip key={index} article={article}>
            <span className="bg-gradient-to-r from-primary-pr100 to-primary-pr200 text-primary-pr700 px-3 py-1 rounded-lg text-xs font-semibold border border-primary-pr200 hover:from-primary-pr200 hover:to-primary-pr300 transition-all duration-200 cursor-help">
              {article}
            </span>
          </DSGVOTooltip>
        ))}
      </div>
    </div>
  );
}

const DatenschutzPage = () => {
  const privacySections = [
    {
      title: "Rechtmäßigkeit und Auftragsverarbeitung",
      cards: [
        {
          title: "Auftragsverarbeitungsvertrag (AVV)",
          description: "Klare vertragliche Regelungen zwischen Kanzlei und Anbieter sowie Microsoft als Unterauftragsverarbeiter.",
          azureFeatures: [
            "Microsoft Data Protection Addendum (DPA) mit EU-Standardvertragsklauseln",
            "ISO 27001/27701 Zertifizierungen für unabhängige Sicherheitsprüfungen",
            "Transparente Auditberichte und Compliance-Nachweise"
          ],
          dsgvoReferences: ["Art. 28", "Art. 6", "Art. 5"],
          IconComponent: FaClipboardList
        },
        {
          title: "Rechtmäßige Verarbeitung",
          description: "Jede Datenverarbeitung basiert auf gültigen Rechtsgrundlagen mit transparenten Einwilligungsmechanismen.",
          azureFeatures: [
            "Microsoft Entra ID (ehem. Azure AD) für Authentifizierung und Zustimmung",
            "Granulare Berechtigungssysteme für verschiedene Datenkategorien",
            "Protokollierung aller Einwilligungen und Rechtsgrundlagen"
          ],
          dsgvoReferences: ["Art. 6", "Art. 5"],
          IconComponent: FaUser
        }
      ]
    },
    {
      title: "Datenschutz durch Technik und Voreinstellung",
      cards: [
        {
          title: "Privacy by Design & EU Data Boundary",
          description: "Datenschutz ist von Anfang an in die Systemarchitektur integriert mit vollständiger EU-Datenresidenz.",
          azureFeatures: [
            "EU Data Boundary 2025: Kundendaten verbleiben vollständig in EU/EFTA",
            "Azure Policy zur Erzwingung EU-Regionsbindung (West Europe, Germany West Central)",
            "Azure OpenAI DataZone Standard für garantierte EU-Verarbeitung ohne Training"
          ],
          dsgvoReferences: ["Art. 25", "Art. 5"],
          IconComponent: FaShieldAlt
        },
        {
          title: "Datenminimierung & Lifecycle Management",
          description: "Nur notwendige Daten werden verarbeitet mit automatischer Bereinigung nach Aufbewahrungsfristen.",
          azureFeatures: [
            "Azure Storage Lifecycle Policies für automatische Datenlöschung",
            "Application Insights mit IP-Maskierung und minimaler Telemetrie",
            "Clientseitige Vorsortierung um nur relevante Auszüge zu übertragen"
          ],
          dsgvoReferences: ["Art. 5"],
          IconComponent: FaChartLine
        },
        {
          title: "Zweckbindung & Zugriffskontrolle",
          description: "Daten werden nur für den ursprünglich angegebenen Zweck verwendet mit strikter Zugriffskontrolle.",
          azureFeatures: [
            "Role-Based Access Control (RBAC) mit granularen Berechtigungen",
            "Azure AD Privileged Identity Management für Admin-Zugriffe",
            "Just-in-Time (JIT) Zugriff und Conditional Access Policies"
          ],
          dsgvoReferences: ["Art. 5", "Art. 6", "Art. 32"],
          IconComponent: FaBullseye
        }
      ]
    },
    {
      title: "Datensicherheit (Integrität und Vertraulichkeit)",
      cards: [
        {
          title: "Ende-zu-Ende-Verschlüsselung",
          description: "Umfassende Verschlüsselung at-rest und in-transit mit optionalen Customer-Managed Keys.",
          azureFeatures: [
            "Azure Key Vault für sichere Schlüsselverwaltung",
            "AES-256 Verschlüsselung für Storage (standardmäßig aktiviert)",
            "TLS 1.3 für alle HTTPS/Web-Verbindungen in Azure App Services"
          ],
          dsgvoReferences: ["Art. 32", "Art. 25"],
          IconComponent: MdVpnLock
        },
        {
          title: "Zero-Trust Netzwerksicherheit",
          description: "Strenge Netzwerkisolation und Zugriffskontrolle mit privaten Endpunkten.",
          azureFeatures: [
            "Private Endpoints für Storage Accounts und interne VNet-Kommunikation",
            "Azure Firewall und Network Security Groups für Netzwerksegmentierung",
            "VPN-Gateway für sichere Kanzlei-Anbindung"
          ],
          dsgvoReferences: ["Art. 32", "Art. 25"],
          IconComponent: HiShieldCheck
        },
        {
          title: "Backup & Disaster Recovery",
          description: "Sichere Datensicherung mit geografischer Redundanz und schneller Wiederherstellung.",
          azureFeatures: [
            "Azure Backup mit Geo-Redundant Storage in EU-Rechenzentren",
            "Point-in-Time Recovery für Datenbanken und Storage",
            "Automated Disaster Recovery mit RPO/RTO-Garantien"
          ],
          dsgvoReferences: ["Art. 32"],
          IconComponent: MdStorage
        }
      ]
    },
    {
      title: "Betroffenenrechte und Datenlöschung",
      cards: [
        {
          title: "Auskunft und Datenportabilität",
          description: "Effiziente Erfüllung von Auskunfts- und Portabilitätsersuchen mit Azure-Tools.",
          azureFeatures: [
            "Azure Data Subject Requests (DSR) Portal für systematische Datensuche",
            "Export-Funktionen für strukturierte Datenübertragung (ZIP, JSON)",
            "Durchsuchbare Audit-Logs für Nachweis der Datenverarbeitung"
          ],
          dsgvoReferences: ["Art. 15", "Art. 20"],
          IconComponent: FaDatabase
        },
        {
          title: "Recht auf Löschung & Vergessen",
          description: "Umfassendes Löschkonzept mit automatischen Lifecycle-Policies und manuellen Löschoptionen.",
          azureFeatures: [
            "Azure Storage Lifecycle Management für automatische Datenlöschung",
            "Soft-Delete und Point-in-Time Recovery für versehentliche Löschungen",
            "Purge-Funktionen für endgültige Datenvernichtung ohne Wiederherstellbarkeit"
          ],
          dsgvoReferences: ["Art. 17", "Art. 5"],
          IconComponent: FaLock
        },
        {
          title: "Berichtigung und Einschränkung",
          description: "Werkzeuge zur Datenkorrektur und temporären Verarbeitungseinschränkung.",
          azureFeatures: [
            "Versionierung von Dokumenten und Metadaten für Berichtigungen",
            "Temporäre Sperrung von Datenverarbeitungen via RBAC",
            "Protokollierung aller Änderungen und Einschränkungen"
          ],
          dsgvoReferences: ["Art. 16", "Art. 17", "Art. 32"],
          IconComponent: HiCog
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-n0">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-pr500 to-primary-pr600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-shadow-lg">
            DSGVO-konforme KI-Dokumentenerstellung
          </h1>
          <p className="text-xl text-center mb-8 max-w-4xl mx-auto opacity-95">
            Drafto nutzt Microsoft Azure als Fundament für Datenschutz und Compliance von Anfang an: 
            Mit EU Data Boundary, Privacy-by-Design, Azure OpenAI DataZone und umfassenden Betroffenenrechten 
            wird DSGVO-Komfort im Kanzlei-Tagesbetrieb greifbar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaShieldAlt />
              <span>EU Data Boundary 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <MdVpnLock />
              <span>Ende-zu-Ende-Verschlüsselung</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaCheckCircle />
              <span>Azure OpenAI ohne Training</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <MdPrivacyTip />
              <span>Privacy by Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          {privacySections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-neutral-n1000 mb-12 text-center">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.cards.map((card, cardIndex) => (
                  <PrivacyCard key={cardIndex} {...card} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default DatenschutzPage

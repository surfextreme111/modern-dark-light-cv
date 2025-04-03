
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { detectBrowserLanguage, supportedLanguages } from '@/utils/languageDetector';

type SupportedLanguage = 'en' | 'es' | 'de';

type Translations = {
  [key: string]: {
    [lang in SupportedLanguage]: string;
  };
};

// Basic translations for demonstration
const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    es: 'Inicio',
    de: 'Startseite',
  },
  'nav.certificates': {
    en: 'Certificates',
    es: 'Certificados',
    de: 'Zertifikate',
  },
  'nav.projects': {
    en: 'Projects',
    es: 'Proyectos',
    de: 'Projekte',
  },
  'nav.education': {
    en: 'Education',
    es: 'Educación',
    de: 'Bildung',
  },
  'nav.skills': {
    en: 'Skills',
    es: 'Habilidades',
    de: 'Fähigkeiten',
  },
  'nav.experience': {
    en: 'Experience',
    es: 'Experiencia',
    de: 'Erfahrung',
  },
  // Sections
  'section.certificates': {
    en: 'CERTIFICATES',
    es: 'CERTIFICADOS',
    de: 'ZERTIFIKATE',
  },
  'section.projects': {
    en: 'PROJECTS',
    es: 'PROYECTOS',
    de: 'PROJEKTE',
  },
  'section.education': {
    en: 'EDUCATION',
    es: 'EDUCACIÓN',
    de: 'BILDUNG',
  },
  'section.skills': {
    en: 'SKILLS',
    es: 'HABILIDADES',
    de: 'FÄHIGKEITEN',
  },
  'section.experience': {
    en: 'PROFESSIONAL EXPERIENCE',
    es: 'EXPERIENCIA PROFESIONAL',
    de: 'ERFAHRUNG IM BERUF',
  },
  // Certificates
  'certificate.english-dev': {
    en: 'English for developers',
    es: 'Inglés para desarrolladores',
    de: 'Englisch für Entwickler',
  },
  'certificate.moss': {
    en: 'MOSS',
    es: 'MOSS',
    de: 'MOSS',
  },
  // Profile
  'profile.title': {
    en: 'Software Engineer',
    es: 'Ingeniero de Software',
    de: 'Software entwickler',
  },
  'profile.location': {
    en: 'Valencia, Spain',
    es: 'Valencia, España',
    de: 'Valencia, Spanien',
  },
  'profile.about': {
    en: 'Ive been in the IT sector since I can remember, and I am looking for a new job where I can continue learning and grow professionally. I contribute, motivate any team, and am eager to start something new.',
    es: 'He estado en el sector de las TI desde que tengo memoria y estoy buscando un nuevo trabajo donde pueda seguir aprendiendo y creciendo profesionalmente. Contribuyo, motivo a cualquier equipo y estoy ansioso por comenzar algo nuevo.',
    de: 'Ich bin seit ich denken kann im IT-Sektor tätig und suche einen neuen Job, in dem ich weiter lernen und beruflich wachsen kann. Ich trage bei, motiviere jedes Team und bin begierig darauf, etwas Neues zu beginnen.',
  },
  'profile.contact': {
    en: 'Contact me',
    es: 'Contáctame',
    de: 'Kontaktiere mich',
  },
  'profile.hobbies': {
    en: 'Hobbies',
    es: 'Aficiones',
    de: 'Hobbys',
  },
  'profile.biography': {
    en: 'Biography',
    es: 'Biografía',
    de: 'Biografie',
  },
  // Skills
  'skill.entrepreneur': {
    en: 'Entrepreneur',
    es: 'Emprendedor',
    de: 'Unternehmer',
  },
  'skill.founderdata': {
    en: 'Founder Elite Padel Formation',
    es: 'Fundador de Elite Padel Formation',
    de: 'Gründer Elite Padel Formation',
  },
  //2022 - Present
  'skill.year': {
    en: '2022 - Present',
    es: '2022 - Presente',
    de: '2022 - Gegenwart',
  },//Online padel training platform with AI analysis
  'skill.description1': {
    en: 'Online elite padel academy with AI analysis & AI ESP to Arabic translation.',
    es: 'Academia de pádel de élite en línea con análisis de IA y traducción con IA de ESP a árabe.',
    de: 'Online-Elite-Padel-Akademie mit KI-Analyse und KI-Übersetzung von ESP nach Arabisch.',
  },//description2
  'skill.description2': {
    en: 'Designed landing page and sales funnel',
    es: 'Diseñó de la web, LMS y embudo de ventas',
    de: 'Landingpage und Verkaufstrichter entworfen',
  },//description3 Developed unique instructional system (UIS) for Qatar market
  'skill.description3': {
    en: 'Developed unique instructional system (UIS) for Qatar market',
    es: 'Desarrolló un sistema de instrucción único (UIS) para el mercado de Qatar',
    de: 'Einzigartiges Instructional System (UIS) für den Markt in Katar entwickelt',
  },
  'skill.frontend': {
    en: 'Frontend',
    es: 'Frontend',
    de: 'Frontend',
  },
  'skill.backend': {
    en: 'Backend',
    es: 'Backend',
    de: 'Backend',
  },
  'skill.languages': {
    en: 'Programming Languages',
    es: 'Lenguajes de Programación',
    de: 'Programmiersprachen',
  },
  'skill.databases': {
    en: 'Databases',
    es: 'Bases de datos',
    de: 'Datenbanken',
  },//development skills
  'skill.developmentskills': {
    en: 'Development Skills',
    es: 'Habilidades de Desarrollo',
    de: 'Entwicklungsfähigkeiten',
  },
    'education.softwareEngineer.title': {
      en: 'Software Engineer',
      es: 'Ingeniero de Software',
      de: 'Softwareentwickler',
    },
    'education.softwareEngineer.description': {
      en: "Bachelor's degree, Valencia. European University of Valencia, Spain",
      es: "Grado universitario, Valencia. Universidad Europea de Valencia, España",
      de: "Bachelor-Abschluss, Valencia. Europäische Universität Valencia, Spanien",
    },
    'education.crossPlatform.title': {
      en: 'Cross-Platform Application Development',
      es: 'Desarrollo de Aplicaciones Multiplataforma',
      de: 'Entwicklung plattformübergreifender Anwendungen',
    },
    'education.crossPlatform.description': {
      en: 'IES LA VEREDA, Spain. Higher Vocational Center',
      es: 'IES LA VEREDA, España. Centro de Formación Profesional Superior',
      de: 'IES LA VEREDA, Spanien. Höhere Berufsbildungsstätte',
    },
    'education.microSystems.title': {
      en: 'Microcomputer Systems and Networks',
      es: 'Sistemas Microinformáticos y Redes',
      de: 'Mikrocomputersysteme und Netzwerke',
    },
    'education.microSystems.description': {
      en: 'CIPFP CHESTE, Spain. Intermediate Vocational Center',
      es: 'CIPFP CHESTE, España. Centro de Formación Profesional Intermedia',
      de: 'CIPFP CHESTE, Spanien. Mittelstufe Berufsbildungszentrum',
    },
    'education.secondary.title': {
      en: 'Secondary Education',
      es: 'Educación Secundaria',
      de: 'Sekundarstufe',
    },
    'education.secondary.description': {
      en: 'IES LA ELIANA, Spain',
      es: 'IES LA ELIANA, España',
      de: 'IES LA ELIANA, Spanien',
    },//edu.date
    'education.date': {
      en: '09/23 - Current',
      es: '09/23 - Actual',
      de: '09/23 - Aktuell',
    },
    'section.experience2': {
      en: 'Experience',
      es: 'Experiencia',
      de: 'Berufserfahrung',
    },
    'experience.commuta.title': {
      en: 'Software Engineer - Commuta Soluciones Tecnológicas S.L.',
      es: 'Ingeniero de Software - Commuta Soluciones Tecnológicas S.L.',
      de: 'Softwareentwickler – Commuta Soluciones Tecnológicas S.L.',
    },
    'experience.commuta.description': {
      en: 'IT/Software development, Tech Design & optimization of databases for connectors. Development of REST APIs with .NET Core and C# integration between Commuta and 7 stakeholders.',
      es: 'Desarrollo de software, diseño técnico y optimización de bases de datos para conectores. Desarrollo de APIs REST con .NET Core y C# para integrar Commuta con 7 partes interesadas.',
      de: 'IT-/Softwareentwicklung, technische Gestaltung und Optimierung von Datenbanken für Konnektoren. Entwicklung von REST-APIs mit .NET Core und C# zur Integration zwischen Commuta und 7 Partnern.',
    },

    'experience.clecee.title': {
      en: 'Software Developer - CLECEE, S.A.',
      es: 'Desarrollador de Software - CLECEE, S.A.',
      de: 'Softwareentwickler – CLECEE, S.A.',
    },
    'experience.clecee.description': {
      en: 'IT/Developer of Software, Valencia, Spain. Java programming | Bash scripting | technical support in the building.',
      es: 'Desarrollador de Software, Valencia, España. Programación en Java | Scripting en Bash | soporte técnico en el edificio.',
      de: 'Softwareentwickler, Valencia, Spanien. Java-Programmierung | Bash-Skripting | technischer Support vor Ort.',
    },

    'experience.tutelas.title': {
      en: 'Tutelas Soluçao LGPD',
      es: 'Tutelas Soluçao LGPD',
      de: 'Tutelas Soluçao LGPD',
    },
    'experience.tutelas.description': {
      en: 'Public Administration, Valencia, Spain. Subcontracted IT Technician | Experience with Linux, Windows, TCP/IP, and network admin.',
      es: 'Administración pública, Valencia, España. Técnico de IT subcontratado | Experiencia con Linux, Windows, TCP/IP y administración de redes.',
      de: 'Öffentliche Verwaltung, Valencia, Spanien. Externer IT-Techniker | Erfahrung mit Linux, Windows, TCP/IP und Netzwerkadministration.',
    },

    'experience.ivass.title': {
      en: 'Technical Support at Ivass Central Offices',
      es: 'Soporte Técnico en Oficinas Centrales de Ivass',
      de: 'Technischer Support in den Zentralbüros von Ivass',
    },
    'experience.ivass.description': {
      en: 'IT/Software development, city. Subcontracted IT Technician.',
      es: 'Desarrollo de software, ciudad. Técnico de IT subcontratado.',
      de: 'Softwareentwicklung, Stadt. Externer IT-Techniker.',
    },
};

type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
  supportedLanguages: SupportedLanguage[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  
  useEffect(() => {
    // Detect browser language on client side
    const detectedLang = detectBrowserLanguage();
    setLanguage(detectedLang);
  }, []);
  
  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, supportedLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

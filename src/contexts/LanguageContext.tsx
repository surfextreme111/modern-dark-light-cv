
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

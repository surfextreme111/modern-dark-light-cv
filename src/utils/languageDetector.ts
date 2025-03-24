
type SupportedLanguage = 'en' | 'es' | 'de';

export const supportedLanguages: SupportedLanguage[] = ['en', 'es', 'de'];

export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';
  
  // Get browser language
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  
  // Check if it's one of our supported languages
  if (supportedLanguages.includes(browserLang as SupportedLanguage)) {
    return browserLang as SupportedLanguage;
  }
  
  // Default to English
  return 'en';
}

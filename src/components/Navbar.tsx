
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export default function Navbar() {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll to track when to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span 
              className="font-display text-xl font-bold cursor-pointer hover-gold-text"
              onClick={() => scrollToSection('top')}
            >
              Andreu Bustos
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('experience')} 
              className="nav-link"
            >
              {t('nav.experience')}
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="nav-link"
            >
              {t('nav.education')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="nav-link"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="nav-link"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('certificates')} 
              className="nav-link"
            >
              {t('nav.certificates')}
            </button>
            
            {/* Language Selector */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="flex items-center space-x-1 nav-link">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{language}</span>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-2">
                <div className="flex flex-col space-y-1">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-4 py-2 text-sm rounded-md hover:bg-accent ${
                        language === lang ? 'bg-accent font-semibold' : ''
                      }`}
                    >
                      {lang === 'en' ? 'English' : lang === 'es' ? 'Español' : 'Deutsch'}
                    </button>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-accent"
            >
              {t('nav.experience')}
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-accent"
            >
              {t('nav.education')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-accent"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-accent"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-accent"
            >
              {t('nav.certificates')}
            </button>
            
            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
              <span className="block text-sm text-muted-foreground mb-2">Language</span>
              <div className="flex space-x-2">
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 text-sm rounded-md ${
                      language === lang ? 'bg-gold-500 text-black font-semibold' : 'bg-accent'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

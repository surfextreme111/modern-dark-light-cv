
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Components
import BookOpeningAnimation from "@/components/BookOpeningAnimation";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";

const Index = () => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Set loaded state to true after animation completes
    setTimeout(() => {
      setIsLoaded(true);
      
      // Observe all elements with reveal-on-scroll class
      document.querySelectorAll('.reveal-on-scroll').forEach(element => {
        observer.observe(element);
      });
    }, 1000); // Same time as book animation

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <BookOpeningAnimation />

      <div id="top" className={`min-h-screen bg-background text-foreground pb-20 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <ThemeToggle />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left column - Profile */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start reveal-on-scroll">
              <div className="p-6 rounded-lg border border-border bg-card shadow-sm">
                <Profile />
              </div>
            </div>
            
            {/* Right column - Main content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="p-6 rounded-lg border border-border bg-card shadow-sm reveal-on-scroll">
                <Experience />
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card shadow-sm reveal-on-scroll">
                <Education />
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card shadow-sm reveal-on-scroll">
                <Skills />
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card shadow-sm reveal-on-scroll">
                <Projects />
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card shadow-sm reveal-on-scroll">
                <Certificates />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gold-500 text-black shadow-lg hover:shadow-[0_0_15px_rgba(238,186,35,0.7)] transition-all duration-300 ${
            showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default Index;

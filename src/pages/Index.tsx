
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <ThemeToggle />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column - Profile */}
          <div className="lg:col-span-4 lg:sticky lg:top-5 lg:self-start">
            <div className="p-6 rounded-lg border border-border bg-card">
              <Profile />
            </div>
          </div>
          
          {/* Right column - Main content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <Experience />
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card">
              <Education />
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card">
              <Skills />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gold-500 text-black shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;

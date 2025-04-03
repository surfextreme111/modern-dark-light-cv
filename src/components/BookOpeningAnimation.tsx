
import { useEffect, useState } from "react";

export default function BookOpeningAnimation() {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Set a timeout to complete the animation after 2.5 seconds
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      document.body.classList.add('animation-completed');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (animationComplete) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="book-container">
        <div className="book">
          <div className="book-cover book-left"></div>
          <div className="book-cover book-right"></div>
          <div className="book-page"></div>
          <div className="book-text">
            <h1 className="text-3xl font-display font-bold text-gold-500">Andreu Bustos</h1>
            <p className="text-muted-foreground">Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

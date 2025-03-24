
import { Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const certificates = [
  {
    title: "Web Development",
    issuer: "European University of Valencia",
    date: "2023",
    description: "Advanced full-stack web development certification"
  },
  {
    title: "React & TypeScript",
    issuer: "CIPFP CHESTE",
    date: "2021",
    description: "Modern frontend development with React and TypeScript"
  },
  {
    title: "Mobile App Development",
    issuer: "IES LA VEREDA",
    date: "2020",
    description: "Cross-platform mobile application development"
  }
];

export default function Certificates() {
  const { t } = useLanguage();
  
  return (
    <div id="certificates" className="space-y-6 opacity-0 animate-fade-up" style={{"--delay": "10"} as React.CSSProperties}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{t('section.certificates')}</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="certificate-card"
            style={{"--delay": index + 11} as React.CSSProperties}
          >
            <div className="p-6 bg-card border border-border rounded-lg hover-shadow-gold transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-gold-500" />
                <h3 className="font-semibold text-lg">{cert.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{cert.issuer} • {cert.date}</p>
              <p className="text-sm">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

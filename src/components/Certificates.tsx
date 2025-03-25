import { Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const certificates = [
  {
    id: 'MOSS',
    title: "MOS - Microsoft Office Specialist",
    issuer: "CIPFP CHESTE Microsoft Office Specialist | WORD | EXCEL | ACESS | POWERPOINT",
    date: "2019",
    description: "View certificate",
    link: "https://drive.google.com/file/d/1TvZqsRcO7HIpcvTFB8KpIAA8q6H_K6n8/view?usp=sharing"
  },
  {
    id: 'b2',
    title: "English B2 Cambridge Certification",
    issuer: "Ángela Niño",
    date: "2025",
    description: "Private Teacher | Cambridge English: First (FCE) | B2",
  },
  {
    id: 'english-dev',
    title: "English for Developers & IT Professionals",
    issuer: "Desafío Latam",
    date: "2021",
    description: "View certificate",
    link: "https://cursos.desafiolatam.com/certificates/slfypch6d7"
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
            key={cert.id}
            className="certificate-card group"
            style={{"--delay": index + 11} as React.CSSProperties}
          >
            <div className="p-6 bg-card border border-border rounded-lg hover-shadow-gold transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-gold-500" />
                <h3 className="font-semibold text-lg">{cert.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{cert.issuer} • {cert.date}</p>

              {cert.id === 'english-dev' || cert.id === 'MOSS' ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm text-gold-500 hover:text-gold-400 transition-colors duration-200 inline-flex items-center"
                >
                  {cert.description}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ) : (
                <p className="text-sm mt-auto">{cert.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Calendar } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const experience = [
  {
    period: "01/22 - 10/24",
    title: "Software engineer - Commuta Soluciones Tecnológicas S.L.",
    description: "IT/Software development, Tech Design & optimization of databases for connectors. Development of REST APIs with .NET Core and C# integration between Commuta and 7 stakeholders."
  },
  {
    period: "04/21 - 01/22",
    title: "Software - Developer in CLECEE, S.A.",
    description: "IT/Developer of Software, Valencia, Spain. Java programming | Bash scripting | technical support in the building."
  },
  {
    period: "03/21 - 04/21",
    title: "Tutelas Soluçao LGPD",
    description: "Public Administration, Valencia, Spain. Subcontracted IT Technician | Experience with Linux, Windows, TCP/IP, and network admin."
  },
  {
    period: "02/21 - 03/21",
    title: "Technical Support at Ivass Central Offices",
    description: "IT/Software development, city. Subcontracted IT Technician."
  }
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <div id="experience" className="space-y-6 opacity-0 animate-fade-up" style={{"--delay": "3"} as React.CSSProperties}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{t('section.experience')}</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{"--delay": index + 11} as React.CSSProperties}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-gold-500" />
              <span className="text-gold-500 font-semibold">{exp.period}</span>
            </div>
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import { Calendar } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const education = [
  {
    period: "09/23 - Current",
    titleKey: "education.softwareEngineer.title",
    descriptionKey: "education.softwareEngineer.description"
  },
  {
    period: "09/19 - 06/21",
    titleKey: "education.crossPlatform.title",
    descriptionKey: "education.crossPlatform.description"
  },
  {
    period: "09/17 - 06/19",
    titleKey: "education.microSystems.title",
    descriptionKey: "education.microSystems.description"
  },
  {
    period: "09/13 - 06/17",
    titleKey: "education.secondary.title",
    descriptionKey: "education.secondary.description"
  }
];

export default function Education() {
  const { t } = useLanguage();

  return (
    <div id="education" className="space-y-6 opacity-0 animate-fade-up" style={{ "--delay": "8" } as React.CSSProperties}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{t('section.education')}</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{ "--delay": index - 50 } as React.CSSProperties}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-gold-500" />
              <span className="text-gold-500 font-semibold">{edu.period}</span>
            </div>
            <h3 className="font-semibold text-lg">{t(edu.titleKey)}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t(edu.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

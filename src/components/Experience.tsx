import { Calendar } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const experience = [
  {
    period: "01/22 - 10/24",
    titleKey: "experience.commuta.title",
    descriptionKey: "experience.commuta.description"
  },
  {
    period: "04/21 - 01/22",
    titleKey: "experience.clecee.title",
    descriptionKey: "experience.clecee.description"
  },
  {
    period: "03/21 - 04/21",
    titleKey: "experience.tutelas.title",
    descriptionKey: "experience.tutelas.description"
  },
  {
    period: "02/21 - 03/21",
    titleKey: "experience.ivass.title",
    descriptionKey: "experience.ivass.description"
  }
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <div id="experience" className="space-y-6 opacity-0 animate-fade-up" style={{ "--delay": "3" } as React.CSSProperties}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{t('section.experience')}</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{ "--delay": index + 11 } as React.CSSProperties}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-gold-500" />
              <span className="text-gold-500 font-semibold">{exp.period}</span>
            </div>
            <h3 className="font-semibold text-lg">{t(exp.titleKey)}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t(exp.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

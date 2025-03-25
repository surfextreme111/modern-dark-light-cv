import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Database, Cpu, Server, Bot } from 'lucide-react';

const languages = [
  { name: "C#", level: 85, icon: <Code className="h-5 w-5 text-gold-500" /> },
  { name: "Java", level: 40, icon: <Cpu className="h-5 w-5 text-gold-500" /> },
  { name: "Python", level: 55, icon: <Server className="h-5 w-5 text-gold-500" /> },
  { name: "JavaScript | React", level: 60, icon: <Code className="h-5 w-5 text-gold-500" /> },
  { name: "SQL", level: 75, icon: <Database className="h-5 w-5 text-gold-500" /> }
];

const developer = [
  { name: "Backend", level: 90, icon: <Server className="h-5 w-5 text-gold-500" /> },
  { name: "Frontend", level: 69, icon: <Code className="h-5 w-5 text-gold-500" /> },
  { name: "DBA", level: 80, icon: <Database className="h-5 w-5 text-gold-500" /> },
  { name: "IA USAGE", level: 40, icon: <Bot className="h-5 w-5 text-gold-500" /> },
];

export default function Skills() {
  const { t } = useLanguage();
  return (
    <div id="skills" className="space-y-8 opacity-0 animate-fade-up" style={{"--delay": "13"} as React.CSSProperties}>
      {/* Title Section */}
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{t('section.skills')}</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Languages Column */}
        <div className="space-y-6 p-6 bg-card border border-border rounded-lg hover-shadow-gold transition-all duration-300">
          <div className="flex items-center space-x-3">
            <Code className="h-6 w-6 text-gold-500" />
            <h3 className="text-lg font-semibold">Programming Languages</h3>
          </div>
          <div className="space-y-6">
            {languages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex items-center space-x-3 mb-2">
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div 
                        key={dot} 
                        className={`w-3 h-3 rounded-full ${
                          dot <= Math.round(skill.level / 20) 
                            ? 'bg-gold-500' 
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{
                      "--progress": `${skill.level}%`,
                      "--delay": index + 14
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Developer Skills Column */}
        <div className="space-y-6 p-6 bg-card border border-border rounded-lg hover-shadow-gold transition-all duration-300">
          <div className="flex items-center space-x-3">
            <Cpu className="h-6 w-6 text-gold-500" />
            <h3 className="text-lg font-semibold">Development Skills</h3>
          </div>
          <div className="space-y-6">
            {developer.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex items-center space-x-3 mb-2">
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div 
                        key={dot} 
                        className={`w-3 h-3 rounded-full ${
                          dot <= Math.round(skill.level / 20) 
                            ? 'bg-gold-500' 
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{
                      "--progress": `${skill.level}%`,
                      "--delay": index + 18
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Entrepreneur Section */}
      <div className="mt-8 p-6 bg-card border border-border rounded-lg hover-shadow-gold transition-all duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <h2 className="text-2xl font-bold">Entrepreneur</h2>
          <div className="flex-1 decoration-gold"></div>
        </div>
        
        <div className="flex space-x-6 items-start">
          <div className="text-gold-500 text-5xl p-3 bg-gold-500/10 rounded-full">🏆</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Founder Elite Padel Formation</h3>
            <p className="text-muted-foreground text-sm mb-3">2022 - Present</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                Online padel training platform with AI analysis
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                Designed landing page and conversion-focused sales funnel
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 mr-2">•</span>
                Developed unique instructional system (UIS) for Qatar market
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
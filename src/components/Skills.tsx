
const languages = [
  { name: "C#", level: 85 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "JavaScript", level: 90 }
];

const developer = [
  { name: "Backend", level: 95 },
  { name: "Frontend", level: 80 },
  { name: "DBA", level: 85 },
];

export default function Skills() {
  return (
    <div className="space-y-6 opacity-0 animate-fade-up" style={{"--delay": "13"} as React.CSSProperties}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">SKILLS</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Languages</h3>
          <div className="space-y-5">
            {languages.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
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
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Developer</h3>
          <div className="space-y-5">
            {developer.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
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
      
      <div className="mt-8">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">EMPRENDEDOR</h2>
          <div className="flex-1 decoration-gold"></div>
        </div>
        
        <div className="mt-6 flex space-x-4 items-start">
          <div className="text-gold-500 text-5xl">🏆</div>
          <div>
            <h3 className="font-semibold text-lg">Founder Elite Padel Formation</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Online padel training with AI for Qatar (Doha) - landing page design - sales funnel - UIS creation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

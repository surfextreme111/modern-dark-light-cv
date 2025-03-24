
import { Calendar } from "lucide-react";

const education = [
  {
    period: "09/23 - Current",
    title: "Software engineer",
    description: "Bachelor's degree, Valencia. European University of Valencia, Spain"
  },
  {
    period: "09/19 - 06/21",
    title: "Cross-Platform Application Development",
    description: "IES LA VEREDA, Spain. Higher Vocational Training Center"
  },
  {
    period: "09/17 - 06/19",
    title: "Microcomputer Systems and Networks",
    description: "CIPFP CHESTE, Spain. Intermediate Vocational Training Center"
  },
  {
    period: "09/13 - 06/17",
    title: "Secondary Education",
    description: "IES LA ELIANA, Spain"
  }
];

export default function Education() {
  return (
    <div className="space-y-6 opacity-0 animate-fade-up" style={{"--delay": "8"} as React.CSSProperties}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">EDUCATION</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item" style={{"--delay": index + 9} as React.CSSProperties}>
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-gold-500" />
              <span className="text-gold-500 font-semibold">{edu.period}</span>
            </div>
            <h3 className="font-semibold text-lg">{edu.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

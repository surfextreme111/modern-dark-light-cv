
import { Github, Linkedin, Mail, MapPin, Phone, FileUser } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Profile() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center space-y-6 opacity-0 animate-fade-up" style={{"--delay": "1"} as React.CSSProperties}>
      <div className="photo-border">
        <div className="h-48 w-48 rounded-tl-3xl rounded-br-3xl overflow-hidden relative z-10">
          <img
            src="/lovable-uploads/cvfoto2.png"
            alt="Andreu Bustos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">ANDREU BUSTOS</h1>
        <div className="flex items-center justify-center mt-2">
          <div className="w-10 h-0.5 bg-gold-500"></div>
          <p className="text-muted-foreground px-3 uppercase">{t('profile.title')}</p>
          <div className="w-10 h-0.5 bg-gold-500"></div>
        </div>
      </div>

      <div className="space-y-3 mt-4 max-w-xs">
        <h2 className="text-xl font-bold text-gold-500 uppercase">{t('profile.contact')}</h2>

        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-gold-500" />
          <span>La Eliana, Valencia</span>
        </div>

        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-gold-500" />
          <span>+34 622 837 695</span>
        </div>

        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4 text-gold-500" />
          <span>andreuba13@gmail.com</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Github className="h-4 w-4 text-gold-500" />
          <a href="https://github.com/surfextreme111" className="hover:text-gold-500 transition-colors">github.com/andreubustos</a>
        </div>
        
        <div className="flex items-center space-x-2">
          <Linkedin className="h-4 w-4 text-gold-500" />
          <a href="https://www.linkedin.com/in/andreu-bustos-aznar-a55238278/" className="hover:text-gold-500 transition-colors">linkedin.com/andreubustos</a>
        </div>

        <div className="flex items-center space-x-2">
          <FileUser className="h-4 w-4 text-gold-500" />
          <a href="https://drive.google.com/drive/folders/16bkXr3-MX2B2JgURDOkIq5bnuWsa10rm?usp=sharing" target="_blank" className="hover:text-gold-500 transition-colors">CV ESP & EN</a>
        </div>
      </div>
      
      <div className="space-y-3 mt-4 max-w-xs">
        <h2 className="text-xl font-bold text-gold-500 uppercase">{t('profile.hobbies')}</h2>
        <ul className="space-y-1">
          <li>- Cybersecurity -INCIBE-</li>
          <li>- Learning Blockchain | Web3</li>
          <li>- Gym | Surf</li>
          <li>- Entrepreneur | Reader</li>
          <li>- Developer .NET C#</li>
        </ul>
      </div>
      
      <div className="space-y-3 mt-4 max-w-xs">
        <h2 className="text-xl font-bold text-gold-500 uppercase">{t('profile.biography')}</h2>
        <p className="text-sm text-left">
         {t('profile.about')}
        </p>
      </div>
    </div>
  );
}
